 # Express.js User Authentication with Passport.js

## Introduction
This project demonstrates how to implement user authentication in an Express.js application using Passport.js. Passport is a popular authentication middleware for Node.js that supports various authentication strategies, including local authentication, social media authentication, and OAuth.

## Prerequisites
To follow this tutorial, you will need the following:

- Node.js and npm installed on your machine.
- A basic understanding of Express.js and routing.
- Familiarity with JavaScript and ES6 syntax.

## Project Setup
1. Create a new Node.js project by running the following command in your terminal:

```
npx create-express-app express-passport-auth
```

2. Navigate to the newly created project directory:

```
cd express-passport-auth
```

## Installing Dependencies
1. Install the required dependencies by running the following command:

```
npm install express passport express-session cookie-parser morgan http-errors
```

## Understanding the Code
### 1. App Initialization
In the `app.js` file, we start by initializing an Express application:

```javascript
var express = require('express');
var app = express();
```

### 2. View Engine Setup
We set the view engine to EJS (Embedded JavaScript) and specify the views directory:

```javascript
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
```

### 3. Session Management
We use the `express-session` middleware to manage user sessions:

```javascript
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "hey hey hey"
}));
```

- `resave`: Set to `false` to prevent resaving of unmodified sessions.
- `saveUninitialized`: Set to `false` to prevent saving of uninitialized sessions.
- `secret`: A secret string used to sign the session ID cookie.

### 4. Passport Initialization
We initialize Passport and configure it to use sessions for persistent login:

```javascript
app.use(passport.initialize());
app.use(passport.session());
```

### 5. Serialization and Deserialization
We define the serialization and deserialization functions for Passport to manage user sessions:

```javascript
passport.serializeUser(usersRouter.serializeUser)