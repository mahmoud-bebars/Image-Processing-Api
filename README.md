# Image Processing-Api

### the project docs diveded into :-

- Description
- Project architecture
- How to use
- How to test
- Avaibale scripts
- Endpoint with responses examples
- Used techs

#

## Description

simply the project enable the user to resize an image with diffrent size of the original.

#

## Project architecture

```
├── Image-Processin-Api
│ ├── dist
│ ├── node_modules (not included in the repo, will be installed after cloning)
│ ├── public
│ │      ├── assets
│ │      └── thumbnails (won't be exists in the first init, but generated with the first request)
│ ├── spec
│ │ └── support
│ │        └── jasmine.json
│ ├── src
│ │ ├── modules
│ │ │      └── imageSizer.ts
│ │ ├── routes
│ │ │       └── Router.js
│ │ ├── tests
│ │ │     ├── helpers
│ │ │     │     └── reporter.ts
│ │ │     └── index.spec.ts
│ │ └── server.ts
│ ├── .eslintrc.js
│ ├── .prettierignore
│ ├── package-lock.json
│ ├── package.json
│ └── ptsconfig.json

```

#

## How to use

- Clone the project in your machine
- then open the terminal and type command `npm install` to install the required packges for the project
- for dev testing type `npm run start`
- for production testing type `start:prod` that will build and start the project in the same time
- there is an availbale script to complie the project from typescript to js type `npm run build`

#

## How to test

- after cloning and installing the needed packages for the project type `npm run test`
- explore the writed tests and fell free to add new ones

#

## Avaibale scripts

- ` "start": "nodemon --watch './**/*.ts' --exec 'ts-node' ./src/server.ts"` to start the server in the development mode.

- `"test": "npx tsc && jasmine"` to starting running tests on the project.

- ` "build": "npx tsc"` compiling the project to js
- ` "start:prod": "npm run build && node dist/server.js"` to startthe server in the production mode.

- ` "lint": "eslint ."` to active eslint and find any type errors.

- ` "lint:fix": "eslint --fix"` fixing the typing errors with eslint.

- ` "format": "prettier --write 'src/\*_/_.ts'"` to formate the code fles with prettier

#

## Endpoint with responses examples

### The project contains 2 endpoints

1- GET Method

- url: localhost:3000/
- statusCode: 🟢 200 Ok
- Response: sending back a json object with a success message

  `{ msg: 'Server is Running successfully... 💬' }`

2- GET Method

- url: localhost:3000/resize
- queries: ?name=(choose any image name in the assests folder)&width=(put any width you wish)&height=(put any height you wish)
- statusCode: 🟢 200 Ok if every thing goes ok
- Response: sending back the resized image to view in the browser
- Expected Errors:
  - api queries isn't complete or missed then the response will be
    - statusCode: 🔴 400 bad request
    - response: sending back a json object with a customized error message for every missed query...  
      `{ msg: 'please add a...' }`
  - could not find the name of the file that has been entered then response will be
    - - statusCode: 🔴 400 bad request
    - response: sending back a json object with a customized error message for every missed query...  
      `{ err: 'file with name:unkwon can not be found' }`

#

## Used techs

| #   |                      Technology                      | Description                                                                             |
| --- | :--------------------------------------------------: | :-------------------------------------------------------------------------------------- |
| 1   |          [Node.js](https://nodejs.org/en/l)          | javascript frame work                                                                   |
| 2   |         [express.js](https://expressjs.com)          | server creator and handler                                                              |
| 3   |    [Typescript](hhttps://www.typescriptlang.org)     | programming language developed and maintained by Microsoft.                             |
| 4   |       [sharp](https://sharp.pixelplumbing.com)       | A Node.js module used to convert large images in common formats to smaller              |
| 5   |    [morgan](https://www.npmjs.com/package/morgan)    | HTTP request logger middleware for node.js                                              |
| 6   |   [jasmine](https://jasmine.github.io/index.html)    | Unit testing framework                                                                  |
| 7   | [supertest](https://www.npmjs.com/package/supertest) | A module provide a high-level abstraction for testing HTTP requests                     |
| 8   |   [nodemon](https://www.npmjs.com/package/nodemon)   | for server handling                                                                     |
| 9   |             [eslint](https://eslint.org)             | static code analysis tool for identifying problematic patterns found in JavaScript code |
| 10  |           [prettier](https://prettier.io)            | An opinionated code formatter                                                           |

#
