# 📧 Email Drafter — ContentBot
> CAPACITI Week 2 AI Bootcamp | Groq AI + Node.js + Express

---

## 🚀 Live Demo

**https://email-drafter-ciay.onrender.com**

Open in any browser — no installation needed.

---

## 📖 What This App Does

Email Drafter is an AI-powered web app that writes professional emails instantly. Instead of staring at a blank screen, you describe what you want to say and the AI writes a complete, polished email.

### How it works:
1. Select a **tone** (Professional, Friendly, Formal, Casual, Persuasive)
2. **Describe** what the email should be about
3. Click **Generate Email**
4. The app sends your description to **Groq AI** (LLaMA 3.3 70B)
5. The AI writes a complete email with subject line and body
6. **Copy** the email and send it anywhere

### Example use cases:
- Following up after a job interview
- Apologising to a client for a delay
- Cold outreach to a business partner
- Requesting a meeting with your manager
- Writing a marketing or sales email

---

## ⚙️ How It's Built

### Backend (`server.js`)
- Node.js + Express
- Receives email description from frontend
- Sends it to **Groq API** with a system prompt
- Returns generated email to frontend

### Frontend (`public/`)
- Pure HTML, CSS, JavaScript — no frameworks
- Form submission → fetch() to backend → display result
- Copy-to-clipboard button included

### AI Model
- **LLaMA 3.3 70B** via Groq API (free, fast)
- Strict system prompt ensures it only writes emails

---

## 📁 File Structure

```
email-drafter/
├── server.js          ← Express server + Groq API calls
├── package.json       ← Dependencies
├── .env.example       ← Environment template
├── .gitignore
├── README.md
└── public/
    ├── index.html     ← Page structure
    ├── style.css      ← Styling
    └── app.js         ← Frontend logic
```

---

## 🛠️ Run Locally

### Requirements
- Node.js installed
- Free Groq API key (https://console.groq.com)

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/SANDILE19991111/email-drafter.git
cd email-drafter

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env
```

Open `.env` and add your Groq key:
```
GROQ_API_KEY=your_key_here
```

```bash
# 4. Start the server
npm start
```

Open **http://localhost:3000**

---

## 🌐 Deployment

Deployed on **Render** (free tier):
- Node.js server runs 24/7
- `GROQ_API_KEY` stored as Render environment variable
- Push to `main` branch auto-deploys

**Live URL:** https://email-drafter-ciay.onrender.com

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js + Express |
| Frontend | HTML + CSS + Vanilla JS |
| AI Model | LLaMA 3.3 70B |
| AI Provider | Groq API |
| Deployment | Render (free tier) |

---

## 👤 Author

**Sandile** — CAPACITI AI Bootcamp 2026  
GitHub: https://github.com/SANDILE19991111
