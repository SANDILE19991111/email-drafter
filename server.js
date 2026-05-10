require("dotenv").config();
const express = require("express");
const Groq = require("groq-sdk");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const SYSTEM_PROMPT = `You are an expert email writing assistant. Your only job is to draft professional, clear, and compelling emails.

Respond with ONLY the email in this exact format:
Subject: [subject line]

[email body]

Rules:
- Match the tone requested (formal, friendly, casual, etc.)
- Always include a greeting and a sign-off
- Be concise and clear
- No extra commentary or explanation outside the email`;

app.post("/api/generate", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || !prompt.trim()) {
    return res.status(400).json({ error: "Please describe your email." });
  }

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      max_tokens: 1024,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: prompt },
      ],
    });

    const email = response.choices[0].message.content;
    res.json({ email });
  } catch (err) {
    console.error("Groq error:", err.message);
    res.status(500).json({ error: "Failed to generate email. Check your API key." });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
