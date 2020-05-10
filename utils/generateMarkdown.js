function generateMarkdown(data) {
  return `
# __${data.title}__
* At least one badge
* Description
${data.description}
## Table of Contents  
* [Installation](#installation)               
* [Usage](#usage)                    
* [License](#license)                      
* [Contributor](#contributor)                 
* [Test](#test)
* [Question](#question) 
## Installation :               
${data.installation}
\`\`\`  
npm i
\`\`\`
## Usage :                   
${data.usage}
## License :                    
${data.license}
## Contributor :              
${data.contributing}
## Test :                      
${data.test}
\`\`\`  
npm run test
\`\`\`
# __Question__ :
![picture](${data.avatar_url})
### Name                     : ${data.name}
### GitHub ID                : ${data.login}
### GitHub URL               : ${data.html_url}
### Email Address            : ${data.email}
`
};

module.exports = generateMarkdown;
