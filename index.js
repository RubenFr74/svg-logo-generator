const inquirer = require('inquirer');
const fs = require('fs');
const { generateSvg } = require('./lib/generateSvg');
const { makeShape } = require('./lib/makeShape');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoName',
      message: 'Please enter text, must not be more than 3 letters',
    },
    {
      type: 'input',
      name: 'textColor',
      message: `Please enter a color keyword or a hexadecimal number for the logo's text color`,
    },
    {
      type: 'input',
      name: 'bgColor',
      message: `Please enter a color keyword or a hexadecimal number for the logo's background color`,
    },
    {
      type: 'list',
      name: 'logoShape',
      message: `Please choose logo shape`,
      choices: ['triangle', 'circle', 'square'],
    },
  ])
  .then((data) => {
    const svgPath = './examples/logo.svg';
    const finalLogo = makeShape(data);

    //Generates the SVG logo 
    fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  })
  .catch((err) => console.error(err));