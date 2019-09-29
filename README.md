### DISCLAIMER
BASE FRAMEWORK = Protractor-Cucumber-TypeScript Setup Guide 
https://github.com/igniteram/protractor-cucumber-typescript  
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
3. npm run build
	- The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
4. npm test
    - To execute your scripts declared on config.ts
    
#### Structure
	com.avaloq.bdd.test      
	|
	|---features              
	|
	|---pages
	|
	|---stepdefinitions
	|
	|---support
	|   |
	|   |------common.ts
	|   |
	|   |------hooks.ts
	|   |
	|   |------reporter.ts
	|
	config
	|
	|----config.ts
	|
	images
	|
	|
	node modules
	|
	|
	reports
	|
	|----html
	|
	|---json
	
1. com.avaloq.bdd.test: Main Test Folder  
1.1 features: Holds the feature file which are written on BDD Format  
1.2 pages: Contains the elements and actions which are grouped per page  
1.3 stepdefinitions: Links the Gherkin step into specific Typescript commands  
1.4 support: Holds the common.ts, hooks.ts, reported.ts  
1.4.1 common.ts: are common functions that can be used on any page  
1.4.2 hooks.ts: listeners  
1.4.3 reporter.ts: Generates report  
2. config.js - is a js file which contains the configurations and properties (i.e, path of feature file, tags etc.)
3. images
4. node modules - contains all dependencies
5. reports - test reports  
5.1 html - HTML representation of the test result  
5.2 json - json representation of the test result  
	   

