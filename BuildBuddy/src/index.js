#!/usr/bin/env node
import { askPrompt } from "./cli.js";
import { generateProject } from "./generator.js";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const answers = await askPrompt();
  await generateProject(answers);
}

main();
