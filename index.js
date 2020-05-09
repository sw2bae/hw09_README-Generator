const inquirer = require("inquirer");
const fs =require("fs");
const axios = require("axios");
const util = require("util");
// const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

function questions(){
    return inquirer.prompt([


        // * At least one badge
        // * Project title
        // * Description
        // * Table of Contents
        // * Installation
        // * Usage
        // * License
        // * Contributing
        // * Tests
        // * Questions
        //   * User GitHub profile picture
        //   * User GitHub email

    ]); 
}

function generateMarkdown(data) {

    return `
  # ${data.title}
  
  * At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email

  `;
}
  
 
async function init() {

    try{

        const userInput = questions();
        const markdown = generateMarkdown(userInput);

        await writeFileAsync("README.md",markdown);
        console.log("***README FILE GENERATED***");
    }
    catch(err){
        console.error(err);
    }

}

init();
