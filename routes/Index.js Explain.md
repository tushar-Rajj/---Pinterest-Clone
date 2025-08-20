 # Social Media App Backend

This is a simple social media app backend built with Express.js and MongoDB. It includes user registration, login, profile, and feed routes.

## Prerequisites

- Node.js and npm
- MongoDB

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/social-media-app-backend.git
```

2. Install the dependencies:

```
npm install
```

## Configuration

1. Create a `.env` file in the root directory of the project and add the following environment variables:

```
MONGODB_URI=mongodb://localhost:27017/social-media-app
```

2. Replace the `MONGODB_URI` value with the connection string to your MongoDB database.

## Usage

1. Start the server:

```
npm start
```

2. Open your browser and navigate to `http://localhost:3000`.

## Routes

The following routes are available:

- `/`: Home page
- `/profile`: Profile page
- `/feed`: Feed page
- `/login`: Login page
- `/register`: Register page
- `/logout`: Logout route

## User Registration

To register a new user, send a POST request to the `/register` route with the following JSON payload:

```
{
  "username": "username",
  "email": "email",
  "fullname": "Full name",
  "password": "password"
}
```

## User Login

To log in a user, send a POST request to the `/login` route with the following JSON payload:

```
{
  "username": "username",
  "password": "password"
}
```

## User Profile

To view a user's profile, send a GET request to the `/profile` route.

## User Feed

To view a user's feed, send a GET request to the `/feed` route.

## Logout

To log out a user, send a GET request to the `/logout` route.

## Additional Notes

- The `isloggedIn` middleware function is used to protect the `/profile` and `/feed` routes. If a user is not logged in, they will be redirected to the home page.
- The `passport.authenticate` middleware function is used to handle user authentication. It uses the `passport-

