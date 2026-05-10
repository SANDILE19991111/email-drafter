let lastEmail = "";

function useChip(text) {
  document.getElementById("context").value = text;
  document.getElementById("context").focus();
}

async function generateEmail() {
  const context = document.getElementById("context").value.trim();
  const tone = document.getElementById("tone").value;

  if (!context) {
    alert("Please describe what your email is about.");
    return;
  }

  const prompt = `Write a ${tone} email: ${context}`;
  setLoading(true);

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    if (data.error) {
      showError(data.error);
    } else {
      showEmail(data.email);
    }
  } catch (err) {
    showError("Cannot reach the server. Make sure it is running.");
  } finally {
    setLoading(false);
  }
}

function showEmail(emailText) {
  lastEmail = emailText;

  const lines = emailText.split("\n");
  let subject = "";
  let bodyLines = [];
  let foundSubject = false;

  for (const line of lines) {
    if (!foundSubject && line.toLowerCase().startsWith("subject:")) {
      subject = line.replace(/^subject:\s*/i, "").trim();
      foundSubject = true;
    } else if (foundSubject || subject === "") {
      foundSubject = true;
      bodyLines.push(line);
    }
  }

  const body = bodyLines.join("\n").replace(/^\n+/, "");

  document.getElementById("subjectBox").textContent = subject ? "Subject: " + subject : "";
  document.getElementById("subjectBox").style.display = subject ? "block" : "none";
  document.getElementById("emailBody").textContent = body;

  hide("placeholder");
  hide("loader");
  hide("errorBox");
  show("result");

  document.getElementById("copyBtn").style.display = "flex";
}

function showError(msg) {
  document.getElementById("errorBox").textContent = "⚠ " + msg;
  hide("placeholder");
  hide("loader");
  hide("result");
  show("errorBox");
  document.getElementById("copyBtn").style.display = "none";
}

function setLoading(on) {
  document.getElementById("generateBtn").disabled = on;
  if (on) {
    hide("placeholder");
    hide("result");
    hide("errorBox");
    show("loader");
    document.getElementById("copyBtn").style.display = "none";
  } else {
    hide("loader");
  }
}

function copyEmail() {
  if (!lastEmail) return;
  navigator.clipboard.writeText(lastEmail).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.textContent = "✓ Copied!";
    setTimeout(() => {
      btn.innerHTML = `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy`;
    }, 2000);
  });
}

function show(id) { document.getElementById(id).style.display = "flex"; }
function hide(id) { document.getElementById(id).style.display = "none"; }

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") generateEmail();
});
