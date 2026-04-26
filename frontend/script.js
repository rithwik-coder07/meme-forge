async function generate() {

    let prompt = document.getElementById("prompt").value;
    let topText = document.getElementById("topText").value;
    let bottomText = document.getElementById("bottomText").value;

    if (!prompt) {
        alert("Please enter something 😅");
        return;
    }

    document.getElementById("loading").style.display = "block";

    let res = await fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt, topText, bottomText })
    });

    let data = await res.json();

    document.getElementById("loading").style.display = "none";

    document.getElementById("img").src = data.image;
}