function generateMarkdown(data) {
  return `
# __${data.title}__
![GitHub followers](https://img.shields.io/github/followers/${data.login}?style=for-the-badge)
* ${data.description}

## __Table of Contents__  
* [Installation](#installation)               
* [Usage](#usage)                    
* [License](#license)                      
* [Contributor](#contributor)                 
* [Test](#test)
* [Question](#question) 
## __Installation__ :               
* ${data.installation}
\`\`\`  
npm i
\`\`\`
## __Usage__ :                   
* ${data.usage}
## __License__ :                    
* ${data.license}
## __Contributor__ :              
* ${data.contributing}
## __Test__ :                      
* ${data.test}
\`\`\`  
npm run test
\`\`\`
# __Question__ :
<img width="150" src="${data.avatar_url}">

### Name                     : ${data.name}
### GitHub ID                : ${data.login}
### GitHub URL               : ${data.html_url}
### Website                  : ${data.blog}
### Email Address            : ${data.email}
`
};

module.exports = generateMarkdown;
