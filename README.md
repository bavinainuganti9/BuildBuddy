# BuildBuddy

## Overview / Description  
BuildBuddy is a terminal-based CLI tool that generates full-stack project scaffolds using GPT-4. Just describe your project (e.g., “blog with user auth”), and BuildBuddy spins up boilerplate code for React + Express, React + Flask, and more. It streamlines project setup for developers building quickly from scratch.

## Features  
- Interactive CLI built with Inquirer for project stack and prompt selection  
- GPT-4 generates boilerplate code based on your project description  
- Supports React + Express and React + Flask stacks out-of-the-box  
- Automatically installs dependencies and initializes Git repo  
- Customizable scaffolds with pluggable generation logic  

## Architecture  
CLI: Node.js command-line tool using Inquirer for user prompts  
Code Generation: GPT-4 API returns project files based on prompt + stack  
File Handling: Generator module writes files to disk and runs setup commands  
Environment: dotenv-based config with support for OpenAI API keys  

## Tech Stack  
Backend: Node.js, OpenAI GPT-4 API, Inquirer, Axios, dotenv  
Frontend Boilerplates: React (customizable via prompt)  
Backend Boilerplates: Express or Flask (generated dynamically)  
Automation: Shell scripts, Git, npm  
