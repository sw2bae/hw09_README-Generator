const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

function questions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "GitHub User Name ?",
            name: "username",
        },
        {
            type: "input",
            message: "Project Title ?",
            name: "title",
        },
        {
            type: "input",
            message: "Project Description ?",
            name: "description",
        },
        {
            type: "input",
            message: "npm Installation ?",
            name: "installation",
        },
        {
            type: "input",
            message: "Project Usage ?",
            name: "usage",
        },
        {
            type: "input",
            message: "Project License ?",
            name: "license",
        },
        {
            type: "input",
            message: "Project Contributor ?",
            name: "contributing",
        },
        {
            type: "input",
            message: "Test npm ?",
            name: "test",
        },
    ]);
};

async function init() {
    try {
        const userInput = await questions();
        const queryURL = `https://api.github.com/users/${userInput.username}`;
        await axios.get(queryURL).then(({data}) => {
            console.log(data);
            userInput.name = data.name;
            userInput.avatar_url = data.avatar_url;
            userInput.html_url = data.html_url;
            userInput.email = data.email;
            userInput.login = data.login;
        });
        const markdown = generateMarkdown(userInput);
        await writeFileAsync("README.md", markdown);
        console.log("***README FILE GENERATED***");
    }
    catch (err) {
        console.error(err);
    }
}

init();
