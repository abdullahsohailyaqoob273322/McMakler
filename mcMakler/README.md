# McMakler Assignment

## Overview

This project covers solution for given Assignment:

- `URL: https://admin-advertisement.herokuapp.com/advertisements`
- `API URL: https://admin-advertisement.herokuapp.com/api/advertisements/`

#### We have two flows:

- Create new advertisement
- Edit any existing advertisement

#### What you need to do → API + E2E testing:

- Create test cases for flow above
- Implement scenarios for created cases

## Folders Hierarchy

- cypress->fixtures `[Contains all data]`
- cypress->framework->objectFactory `[Contains all web elements objects]`
- cypress->framework->pageMethodFactory `[Contains all Page functions]`
- cypress->integration `[Contains all Testcases]`
- cypress.json `[includes project configurations]`

## Setup

After cloning project from github, open project in vscode.
Nevigate to following directory: `/McMakler/mcMakler`
and type following command in vscode terminal.

```bash
  npm i
```

## Run Tests

Go to the project directory mentioned in Setup step and run following command:

```bash
  npm run cypress:open
```
