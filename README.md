# Email Drafter — ContentBot
CAPACITI Week 2 AI Bootcamp Project

Powered by Groq API (LLaMA 3.3 70B) + Node.js + Express. Runs independently — no Claude needed.

---

## File Structure

```
email-drafter/
├── server.js          <- Node.js backend (Express + Groq)
├── package.json       <- Project config & dependencies
├── .env.example       <- API key template
├── .gitignore
├── README.md
└── public/
    ├── index.html     <- Main page
    ├── style.css      <- All styles
    └── app.js         <- Frontend logic
```

---

## Run Locally (VS Code)

### 1. Install Node.js
Download from https://nodejs.org (LTS version)

### 2. Get FREE Groq API Key
- Go to https://console.groq.com
- Sign up → API Keys → Create API Key
- Copy the key (starts with gsk_)

### 3. Open project in VS Code
File → Open Folder → select email-drafter

### 4. Open terminal in VS Code (Ctrl + backtick)

```bash
npm install
```

### 5. Create your .env file
```bash
copy .env.example .env
```
Open .env and add your key:
```
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxx
```

### 6. Start the server
```bash
npm start
```

Open browser at: http://localhost:3000

---

## Push to GitHub

```bash
git init
git add .
git commit -m "Week 2: Email Drafter"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/email-drafter.git
git push -u origin main
```

---

## Deploy Live FREE on Render

1. Go to https://render.com and sign up with GitHub
2. New → Web Service → connect your repo
3. Set these:
   - Build Command:  npm install
   - Start Command:  npm start
4. Add Environment Variable:
   - Key:   GROQ_API_KEY
   - Value: gsk_xxxxxxxxxxxxxxxx
5. Click Deploy
6. Get your live URL: https://email-drafter-xxxx.onrender.com

---

## Tech Stack
- Backend:  Node.js + Express
- Frontend: HTML + CSS + Vanilla JS
- AI:       LLaMA 3.3 70B via Groq API
- Deploy:   Render (free tier)
