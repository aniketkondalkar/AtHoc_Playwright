# Playwright Automation Framework

This project contains automated UI tests built using **Playwright with JavaScript**.  
It is designed to automate web application testing and generate test execution reports.

---

## Project Structure

project
│
├── tests
│ ├── login.spec.js
│ ├── userCreation.spec.js
│
├── config
│ └── config.js
│
├── playwright.config.js
├── package.json
├── README.md

---

## Prerequisites

Before running the tests, ensure the following are installed:

- Node.js
- npm

You can verify installation:
node -v
npm -v

---

## Installation

Clone the repository:

https://github.com/aniketkondalkar/AtHoc_Playwright.git

Navigate to the project directory:

cd C:ATHOC/

Install dependencies:

npm install


Install Playwright browsers:

npx playwright install

## Running Tests

Run all tests:

npx playwright test

Run tests in headed mode:

npx playwright test --headed


Run a single test:

npx playwright test -g "create a user" --headed

---

## Test Reports

After test execution, you can view the HTML report:

npx playwright show-report


The report will open in your browser showing test results, screenshots, and logs.

## Features

- UI automation using Playwright
- Cross-browser testing
- HTML test reports
- Easy configuration setup

---

## Author

**Aniket Kondalkar**

Automation Test Engineer