![Property Finder](images/image.png)
# PROJECT SUMMARY
* This project developed for 'Property Finder' Interview Task
* **[Assignment](./images/Assignment.pdf)** details
* **[Node.js](https://nodejs.org/en/download/current)** was used for package manager
* **[Cypress.io](https://www.cypress.io/)** was used for test tool
* **[Git](https://git-scm.com/downloads)** was used for version control
* **[Cypress-Cucumber](https://www.npmjs.com/package/cypress-cucumber-preprocessor)** framework was used
* **[VsCode](https://code.visualstudio.com/download)** was used as IDE
## Project Structure
* POM structure was used
* **[pages](./cypress/pages)** folder includes page object classes
* **[e2e](./cypress/e2e)** folder includes feature file
* **[propertyFinder](./cypress/e2e/propertyFinder)** folder includes step definitions
* **[cypress.config.js](./cypress.config.js)** and **[package.json](./package.json)** files includes project configurations
## Test Execution
* Initially install Node.js with given link at the above
* Then install git with given link at the above
* Clone the project with following code

```
git clone https://github.com/caslanqa/Property_Finder.git
```
* Open terminal from the project directory
* Run the following codes
```
npm init -y
```
> without overwrite
```
npm i cypress@13.3.3 --save-dev
```
```
npm run propertyFinder
```