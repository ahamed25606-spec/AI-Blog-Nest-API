1. Create the project folder
mkdir my-node-project
cd my-node-project

2. Initialize Node.js
npm init -y

This creates:

my-node-project/
└── package.json

3. Create the main JavaScript file
Create index.js:

console.log("Hello, Node.js!");

Your project becomes:

my-node-project/
├── index.js
└── package.json

4. Add a start script
Open package.json and use:

{
  "name": "my-node-project",
  "version": "1.0.0",
  "description": "My Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

Then run:

npm start

Output:

Hello, Node.js!

5. Optional: initialize Git
git init

Create .gitignore:

node_modules/
.env

A typical Node.js project will eventually look like:

my-node-project/
├── node_modules/
├── src/
│   └── index.js
├── .gitignore
├── package-lock.json
└── package.json
