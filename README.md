# 🎭 MemeForge — AI-Powered Meme Generator

<div align="center">

![MemeForge Banner](https://img.shields.io/badge/MemeForge-AI%20Meme%20Generator-f0c419?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHRleHQgeT0iMjAiIGZvbnQtc2l6ZT0iMjAiPvCfjq08L3RleHQ+PC9zdmc+)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-meme--forge.onrender.com-brightgreen?style=for-the-badge&logo=render)](https://meme-forge.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-rithwik--coder07-black?style=for-the-badge&logo=github)](https://github.com/rithwik-coder07/meme-forge)
[![Node.js](https://img.shields.io/badge/Node.js-v24-green?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<br/>

> **Turn any idea into a viral meme in seconds — powered by Google Gemini AI**

<br/>

[🚀 Live Demo](https://meme-forge.onrender.com) · [🐛 Report Bug](https://github.com/rithwik-coder07/meme-forge/issues) · [✨ Request Feature](https://github.com/rithwik-coder07/meme-forge/issues)

</div>

---

## 📸 Preview

| Home Page | Meme Studio | Generated Meme |
|-----------|-------------|----------------|
| Professional dark UI with hero section | Template grid + AI caption input | Real meme with downloaded PNG |

---

## ✨ Features

- 🤖 **AI Caption Generator** — Describe your idea and Google Gemini AI writes punchy, viral captions automatically
- 🖼️ **20+ Real Meme Templates** — Drake, Distracted Boyfriend, Doge, Two Buttons, and many more from Imgflip API
- 🔐 **User Authentication** — Sign Up / Sign In with session management; username shown in navbar after login
- ⬇️ **Instant PNG Download** — Download your meme directly to your device in one click
- 🎨 **Multiple Humor Styles** — Funny/Relatable, Dark Humor, Sarcastic, Wholesome, Motivational, Absurdist
- 🌍 **Deployed Online** — Live on Render.com, accessible 24/7 from any device worldwide
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile browsers

---

## 🛠️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)

### APIs & Services
![Google Gemini](https://img.shields.io/badge/Google%20Gemini%20AI-4285F4?style=flat-square&logo=google&logoColor=white)
![Imgflip](https://img.shields.io/badge/Imgflip%20API-FF6B35?style=flat-square)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white)

### Tools
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

---

## 📁 Project Structure

```
meme-forge/
│
├── 📁 backend/
│   ├── server.js          # Express server, API routes
│   └── .env               # Environment variables (API keys)
│
├── 📁 frontend/
│   ├── index.html         # Main meme generator page
│   ├── login.html         # Sign Up / Sign In page
│   ├── style.css          # Global styles
│   └── script.js          # Frontend JavaScript
│
├── .gitignore             # Git ignore file
├── package.json           # Node.js dependencies
├── package-lock.json      # Dependency lock file
└── README.md              # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- [Git](https://git-scm.com/)
- A free [Google AI Studio](https://aistudio.google.com) account for Gemini API key
- A free [Imgflip](https://imgflip.com/signup) account

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/rithwik-coder07/meme-forge.git
cd meme-forge
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file inside the `backend/` folder:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=5000
```

> 🔑 Get your free Gemini API key from [Google AI Studio](https://aistudio.google.com)

**4. Update Imgflip credentials**

In `backend/server.js`, update your Imgflip username and password:
```javascript
'&username=your_imgflip_username' +
'&password=your_imgflip_password' +
```

**5. Run the server**
```bash
cd backend
node server.js
```

You should see:
```
MemeForge server running at http://localhost:5000
```

**6. Open the app**

Open `frontend/index.html` with VS Code Live Server or navigate to:
```
http://127.0.0.1:5500/frontend/index.html
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Check if server is running |
| `GET` | `/api/templates` | Fetch 20 popular meme templates |
| `POST` | `/api/generate` | Generate AI captions using Gemini |
| `POST` | `/api/create-meme` | Create meme image using Imgflip |

### Example Request — Generate Caption

```bash
POST /api/generate
Content-Type: application/json

{
  "description": "student studying one night before exam",
  "style": "Funny / Relatable"
}
```

### Example Response

```json
{
  "top": "Me at 11:58 PM",
  "bottom": "Assignment due at midnight",
  "tip": "Keep captions under 6 words for maximum impact!"
}
```

---

## 🚀 Deployment

This project is deployed on **Render.com** (free tier).

### Deploy your own instance:

1. Push your code to GitHub
2. Go to [render.com](https://render.com) and create a **New Web Service**
3. Connect your GitHub repository
4. Set the following:
   - **Build Command:** `npm install`
   - **Start Command:** `node backend/server.js`
5. Add environment variables:
   - `GEMINI_API_KEY` → your key
   - `PORT` → `5000`
6. Click **Deploy** 🎉

---

## 🎯 How It Works

```
User describes idea
        ↓
Frontend sends to Backend (Node.js)
        ↓
Backend calls Google Gemini AI
        ↓
AI generates funny captions (JSON)
        ↓
Backend calls Imgflip API with captions + template
        ↓
Imgflip returns meme image URL
        ↓
User sees meme + downloads PNG ✅
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📋 Future Improvements

- [ ] Real Google OAuth login
- [ ] Forgot password via email (NodeMailer)
- [ ] Save meme history to database (MongoDB)
- [ ] Mobile app version
- [ ] Share directly to social media
- [ ] More meme template categories

---

## 👨‍💻 Developer

**E. Rithwik Teja**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/rithwik-teja-49254033b)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/rithwik-coder07)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:rithwike4@gmail.com)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [Google Gemini AI](https://aistudio.google.com) — for the powerful AI caption generation
- [Imgflip API](https://imgflip.com/api) — for the meme template library
- [Render.com](https://render.com) — for free cloud hosting
- [VNR Vignana Jyothi Institute of Engineering & Technology](https://vnrvjiet.ac.in) — CBP Project 2025-26

---

<div align="center">

**⭐ If you like this project, please give it a star on GitHub! ⭐**

Made with ❤️ by [Rithwik Teja](https://github.com/rithwik-coder07)

</div>
