import axios from "axios";
import { writeFileSync, mkdirSync } from "fs";
import { execSync } from "child_process";

const OPENAI_KEY = process.env.OPENAI_API_KEY;

export async function generateProject({ stack, description }) {
  const prompt = `Generate a starter ${stack} project for: ${description}. Include package.json, server, and basic client. Return files as an array of {path, content}.`;

  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    },
    { headers: { Authorization: `Bearer ${OPENAI_KEY}` } }
  );

  const projectFiles = JSON.parse(res.data.choices[0].message.content);

  for (const file of projectFiles) {
    mkdirSync(path.dirname(file.path), { recursive: true });
    writeFileSync(file.path, file.content);
  }

  execSync("npm install", { cwd: "./" });
  execSync("git init", { cwd: "./" });

  console.log("✅ Project generated successfully.");
}
