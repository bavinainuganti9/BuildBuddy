import inquirer from "inquirer";

export async function askPrompt() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "stack",
      message: "Choose your stack:",
      choices: ["React + Express", "React + Flask"],
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project (e.g. ‘blog app with auth’):",
    },
  ]);
  return answers;
}
