# NC News

NC News is a full stack project based on an article & discussion website, created using the Create React App.

:eye_speech_bubble: Here is the hosted version of this front-end project:

[NC News](https://zalwayjh-nc-news.netlify.app/)

<img src="src/resources/GitHub-Mark.png" alt="github" width=18px> You can link to the back-end Git repository I created here:

[NC News API](https://github.com/ZalwayJH/Backend-Project-NC-news)

:spider_web: Here is the hosted version of the back-end api:

[NC News Backend Endpoints](https://zalwayjh-nc-news.cyclic.app/api/)

NC News App Preview

About
The articles are divided into several categories. Each article has user curated ratings and can be up or down voted using the API. Users can also add their own comments about a article.

The site is not set up with user authentication, this is currently hard-coded as per the brief.

This front-end, hosted by Netlify, requests data from the backend, a REST API created with a PostgreSQL database and Express server and hosted by Cyclic.

#### Features

- Mobile first design
- View and filter articles by category
- Sort articles by date, votes or comments
- Users may add their own comments
- Users may vote on articles
  \*Error handling for invalid routes and bad requests

#### Technologies

- [React](https://reactjs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Router](https://reactrouter.com/en/main)
- [React-Select](https://react-select.com/home)

###Installation
Firstly, make sure you have Node.js installed.

Clone this repository on your local machine

```

git clone https://github.com/ZalwayJH/fe-nc-news
```

Navigate into the repository

```

cd fe-nc-news
```

Install dependencies

```

npm install
```

Start the application to run on your default browser

```

npm start
```

Built with Node Version:
v18.7.0
