# SETUP
$ mkdir client server
$ npm i express mongoose dotenv
$ npm i --save-dev nodemon concurrently

# FRONT END
cd client
npx create-react-app
rm -rf .git (To remove git repo in client folder)

# BACKEND
"change main in package.json to server.js"

## In server.js

const express = require('express');
const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})

## .env + gitignore

PORT = 5000
MONGO_URI = ""
==============================

### dependencies
node_modules
node_modules/
/.pnp
.pnp.js

### testing
/coverage

### production
/build

### misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*


### Testing

node server/server.js
