# Lumina Movies Frontend With React

This project is a SPA (Single Page Application) that shows everyone's favourite movies from database. React was choosen for this solution cause It has a robust ecosystem and is remarkably flexible. it comes with it own set of companion libraries and frameworks for implementing complex functions.With the assistance of features such as Virtual DOMs, JSX, impressive state management, and reusable components independent of each other,it also cuts development time.You can create clean and manageable codes with React’s strict structure rules and unidirectional flow of data. It is also effortless to test and maintain web applications and websites.

# Application User story

The user opens the application e.g [https://lumina-movies.web.app or http://localhost:3000], registers and logs in.
If Login is successful, The user is redirected to feeds page, the user sees list of movies of a certain category
The user can change the movie category
The user can add a movie as a favourite
The user can navigate to favourites page
The user sees list of all his favourite movies
The user can remove a movie from the list of favourites
The user can logout

## How to run this application

In the project directory, you can run:

### `npm install`
Installs all the packages the application needs to run smoothly

## Configure .ENV fILE
In the project file you would find a file .env_example which contains the environment variables needed to connect to the node backend [Lumina-Movies-Nodejs (https://github.com/Gbollyhub/Lumina-Movies-Nodejs)] of this application

Create your own .env and add the corresponding environment variables e.g [REACT_APP_API_KEY = http://localhost:4000]

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Security
The user information is hashed so thirdparty can steal information
A jwt token is used to authenticate the users requests, For instance, a user can only see his information.
The jwt token does not expire so theres room for improvement


