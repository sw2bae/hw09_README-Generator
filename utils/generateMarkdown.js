function generateMarkdown(data) {
  return `
# ${data.title}

* At least one badge
* Project title                 : ${data.title}
* Description                   : ${data.description}

* Table of Contents             
* Installation                  : ${data.installation}
* Usage                         : ${data.usage}
* License                       : ${data.license}
* Contributing                  : ${data.contributing}
* Tests                         : ${data.test}
* Questions                     : ${data.title}

* User Name                     : ${data.name}
* User GitHub profile picture   : ${data.avatar_url}
* User GitHub URL               : ${data.html_url}
* User Email Address            : ${data.email}
`;
}

module.exports = generateMarkdown;
