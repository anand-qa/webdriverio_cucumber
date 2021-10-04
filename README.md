# WebdriverIO with Cucumber Framework

## Project Structure

This project consists of login feature.

To reduce duplication, all common code has been moved into common page.

The project structure is as follows:

```sh
# Main Project Dependencies
/JDK                        // Java Development Kit Version: 1.8.0_201
/nodejs                     // JavaScript engine Version: 14.17.4
/Allure-Reporter            // Reporting Version:7.13.2
/Cucumber-Framework         // Framework structure Version: 7.13.2
/Chromedriver               // For Chrome browser Version: 94.0.0
/wdio-chromedriver-service  // For Framework service: Version: 7.2.2
```

## Prerequisites
```sh
1. Install VSCode in system
2. Download the code from the repository using the URL:'https://github.com/anand-qa/webdriverio_cucumber.git'
3. Open project in VSCode
4. Open Terminal
```

## Install dependencies

```sh
npm install
npm install -g allure-commandline --save-dev
```

## How to run the code
```sh
npx wdio wdio.conf.ts 
```

## Open Results
```sh
Results are genetared and stored in folder "allure-results" in xml format
#Open results in html format (after execution) run below command in terminal
allure generate allure-results && allure open
```

## Project description
```sh
#Project consists of one feature file in which 2 scenarios are covered
 1. User opens the AUT "http://automationpractice.com/index.php" and registers with a valid email ID and logs out 
    of the application.

 2. User opens the AUT "http://automationpractice.com/index.php" logs into the application, select a product
    navigates to payment page and validates the product name.

 **Note:**
    Framework is designed in such a way that, Second scenario depends on the 1st scenario so Tester needs to run both scenarios one after the other
```

## Framework design model
```sh
page object model (POM)
```

## Project structure explanation
## features
```sh
    This folder contains sub folders pageobjects, step-definitions and login.feature file

    #pageobjects: 
     contains files with page names used in the framework with ".ts" extension and each page file has respective  
     page methods wich in-turn call page elements.

    #step-definitions:
     contains "step.ts" where all the feature methods are derived, which in-turn connects with respective pages to 
     call upon page methods.

    #login.feature:
     This is the place where all the scenarios are written with keywords "Given", "When", "Then" and "And"

```

## node_modules 
```sh
    All the dependencies are downloaded and configured in this folder
```

## jsconfig.json 
```sh
    The below code is added to get Auto populate commads while writing scripts
    {
    "compilerOptions": {
        "types": [
            "node",
            "webdriverio/sync",
            "@wdio/mocha-framework"
        ]
    },
    "include": [
        "test/specs/*.js",
        "**/*.json",
        "node_modules/@wdio/sync",
        "node_modules/@wdio/mocha-framework"
    ]
}
```

## package-lock.json
```sh
    In-built dependencies are displayed
```

## package.json
```sh
    User defined dependencies are displayed 
```


## tsconfig.json 
```sh
    Cucumber framework specific code is displayed, added few more lines and it looks like below
    {
    "compilerOptions": {
        "types": [
            "node",
            "webdriverio/async",
            "@wdio/cucumber-framework",
            "expect-webdriverio"
        ],
        "target": "ES2019",
        "module": "commonjs"
    }
} 
```


## wdio.conf.ts 
```sh
    This file can be called as heart of the framework where all the configurations are mentioned
    user can change as per requirements

    Apart from below rest are default:

    #1.
     logLevel: 'silent',

    #2.
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    #3.
    afterStep: function (test, scenario, { error, duration, passed }) {
        if (error) {
            browser.takeScreenshot();
        }
    }
```
