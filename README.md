### DISCLAIMER
BASE FRAMEWORK = api-testing-protractor-typescript
https://github.com/qaloop/api-testing-protractor-typescript 
For POC Purposes only

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/
2.Chrome or Firefox browsers installed.
3.Text EditorSublime/Visual Studio Code/Brackets/Eclipse

#### Setup Scripts
1. Create your workspace folder
2. Inside the workspace folder, clone this repository
3. Run npm install
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.
4. Import this project in your text editor


#### Run Scripts
1. npm run webdriver-update 
	- download/update your chrome and gecko drivers via webdriver manager
2. npm run webdriver-start
	- start your selenium server
3. npm run clean && npm run tsc
	- The command would clean and create an output folder named 'typeScript' and transpile the .ts files to .js.
4. npm test
    - To execute your scripts declared on config.ts
    
#### Structure
├───images                          # This folder contains sample report image
├───temp                            # This folder contains JS file which are generated after compiling TypeScript files
├───test-results                    # This folder contains test result (includes html report and screenshots)
└───test-suites                     # This folder contains spec/test files

