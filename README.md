# 📧 Email Drafter — ContentBot
> CAPACITI Week 2 AI Bootcamp | Groq AI + Node.js + Express

---

## 🚀 Live Demo

👉 **https://email-drafter-ciay.onrender.com**

> Open the link in any browser — no installation needed.

---

## 📖 What This App Does

Email Drafter is an AI-powered web application that helps you write professional emails instantly. Instead of staring at a blank screen, you simply describe what you want to say and the AI writes a complete, polished email for you.

### How it works:
1. You select a **tone** (Professional, Friendly, Formal, Casual or Persuasive)
2. You **describe** what the email should be about in a few words
3. You click **Generate Email**
4. The app sends your description to the **Groq AI API** (running LLaMA 3.3 70B)
5. The AI writes a complete email with a subject line and full body
6. You can **copy** the email and send it anywhere

### Example use cases:
- Following up after a job interview
- Apologising to a client for a delay
- Cold outreach to a business partner
- Requesting a meeting with your manager
- Writing a marketing or sales email

---

## ⚙️ How the App is Built

This app has two parts that work together:

### Backend (server.js)
- Built with **Node.js** and **Express**
- Receives the user's email description from the frontend
- Sends it to the **Groq API** with a system prompt that tells the AI to write emails only
- Returns the generated email back to the frontend
- Runs on port 3000 locally, or on Render when deployed

### Frontend (public/)
- Pure **HTML, CSS and JavaScript** — no frameworks
- The user fills in the form and clicks Generate
- JavaScript sends the request to the backend using fetch()
- The response is displayed instantly on the page
- Includes a copy-to-clipboard button

### AI Model
- Uses **LLaMA 3.3 70B** via the Groq API
- Groq is free to use and extremely fast
- The AI is given a strict system prompt so it only writes emails — nothing else
- 
- email-drafter/
├── server.js          ← Backend: Express server + Groq API calls
├── package.json       ← Node.js project config and dependencies
├── .env.example       ← Template showing which environment variables are needed
├── .gitignore         ← Tells Git to ignore node_modules and .env
├── README.md          ← This file
└── public/            ← Everything the browser loads
├── index.html     ← The main page structure
├── style.css      ← All styling and layout
└── app.js         ← Frontend logic (fetch, display, copy)
---

## 🛠️ Run It Locally

### Requirements
- Node.js installed (https://nodejs.org)
- A free Groq API key (https://console.groq.com)

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/SANDILE19991111/email-drafter.git
cd email-drafter

# 2. Install dependencies
npm install

# 3. Create your environment file
copy .env.example .env
```

Open `.env` and add your Groq key:
```bash
# 4. Start the server
npm start
```

Open your browser at **http://localhost:3000**

---

## 🌐 Deployment

This app is deployed on **Render** (free tier).

- Render runs the Node.js server 24/7
- The `GROQ_API_KEY` is stored securely as an environment variable on Render
- Any push to the `main` branch on GitHub automatically redeploys the app

Live URL: **https://email-drafter-ciay.onrender.com**

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js + Express |
| Frontend | HTML + CSS + Vanilla JavaScript |
| AI Model | LLaMA 3.3 70B |
| AI Provider | Groq API (free) |
| Deployment | Render (free tier) |
| Version Control | GitHub |

---

## 👤 Author

**Sandile** — CAPACITI AI Bootcamp 2026
GitHub: https://github.com/SANDILE19991111

---

## 🗂️ File Structure
