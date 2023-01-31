## NC News

NC News is a full stack project based on an article & discussion website, created using the Create React App.

Here is the hosted version of this front-end project:
[NC News](https://zalwayjh-nc-news.netlify.app/)

You can link to the back-end Git repository I created here:

github GitHub Ghastly-Games-API

Here is the hosted version of the back-end api:

Cyclic Ghastly Games API

Ghastly Games App Preview

About
The game reviews are divided into several categories. Each review has user curated ratings and can be up voted using the API. Users can also add or delete their own comments about a review.

The site is not set up with user authentication, rather the user selection is available to show that comments can only be added or deleted by the appropriate signed in user (this is currently hard-coded).

This front-end, hosted by Netlify, requests data from the backend, a REST API created with a PostgreSQL database and Express server and hosted by Cyclic.

Features
Mobile first design
View and filter reviews by category
Sort reviews by date, votes or comments
Users may add or delete their own comments
Users may vote on reviews
Error handling for invalid routes and bad requests
Technologies
React
Axios
React Router
Installation
Firstly, make sure you have Node.js installed.

Clone this repository on your local machine

git clone https://github.com/MrsCf28/GhastlyGames
Navigate into the repository

cd fe-ghastly-games
Install dependencies

npm install
Start the application to run on your default browser

npm start
Built with Node Version:
v18.7.0
