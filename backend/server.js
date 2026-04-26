const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const https = require('https');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static('../frontend'));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function httpsPost(hostname, path, postData) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: hostname,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          reject(new Error('Invalid JSON response'));
        }
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

app.get('/api/templates', async (req, res) => {
  try {
    const data = await httpsGet('https://api.imgflip.com/get_memes');
    const templates = data.data.memes.slice(0, 20).map(meme => ({
      id: meme.id,
      name: meme.name,
      url: meme.url,
      box_count: meme.box_count
    }));
    res.json({ templates });
  } catch (error) {
    console.error('Templates error:', error.message);
    res.status(500).json({ error: 'Failed to fetch templates' });
  }
});

app.post('/api/create-meme', async (req, res) => {
  const { template_id, text0, text1 } = req.body;
  console.log('Creating meme:', template_id, text0, text1);
  try {
    const postData = 'template_id=' + encodeURIComponent(template_id) +
      '&username=rithwikteja' +
      '&password=Riha@1916' +
      '&text0=' + encodeURIComponent(text0 || '') +
      '&text1=' + encodeURIComponent(text1 || '');

    console.log('Sending to imgflip:', postData);
    const data = await httpsPost('api.imgflip.com', '/caption_image', postData);
    console.log('Imgflip response:', data);

    if (data.success) {
      res.json({ url: data.data.url });
    } else {
      console.error('Imgflip error:', data.error_message);
      res.status(500).json({ error: data.error_message });
    }
  } catch (error) {
    console.error('Create meme error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/generate', async (req, res) => {
  const { description, style } = req.body;
  if (!description) return res.status(400).json({ error: 'Description required' });
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `You are a hilarious meme caption writer.
Description: "${description}"
Humor style: "${style || 'Funny / Relatable'}"
Write funny top and bottom meme captions (each under 6 words).
Reply ONLY in this exact JSON: {"top":"...","bottom":"...","tip":"..."}`;
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(text);
    res.json(parsed);
  } catch (error) {
    console.error('Gemini error:', error.message);
    res.json({
      top: description.split(' ').slice(0, 4).join(' '),
      bottom: 'story of my life',
      tip: 'Using your text directly!'
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'MemeForge server running!' });
});

app.listen(PORT, () => {
  console.log('MemeForge server running at http://localhost:' + PORT);
});