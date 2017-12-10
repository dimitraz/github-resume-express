# Assignment 1 - ReactJS app

Name: Dimitra Zuccarelli

## Overview
Github Resume is a single page React app which allows users to log in with their GitHub account and create a resume from their bio and repo information in under 5 minutes. It also allows both logged in and non-logged in users to view public user profiles. 

Some features include:
 
 + Log in with Github and populate resume page
 + Modify, add and delete projects
 + Modify, add and delete interests
 + View public profiles
 + Search for public users by location or username

## Technologies
The main technologies used include:

+ React 16
+ React router 4
+ create-react-app
+ Request for http requests
+ Firebase
+ Semantic React

A complete list of dependencies can be found in the `package.json` file.  

## Getting started 
To get started, from the base project folder install and start the json mock server on port 3400:
```bash
$ cd /project/root
$ npm install -g json-server
$ json-server src/api/db.json --watch --port 3400
```
To connect to your Firebase application, update the `env.js` in the `config` folder with your app's API key:

```javascript
export const API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
```

Now run the app: 
```
$ npm install
$ npm start
```

## Data Model Design

The Json mock server contains three entities: `Users`, `Projects`, and `Interests`. An example of each is found below:

**User**

Details section modelled from Github API - [`GET /users/:username`](https://api.github.com/users/octocat)
```javascript
{
  "id": "1",
  "details": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false,
      "name": "monalisa octocat",
      "company": "GitHub",
      "blog": "https://github.com/blog",
      "location": "San Francisco",
      "email": "octocat@github.com",
      "hireable": false,
      "bio": "There once was...",
      "public_repos": 2,
      "public_gists": 1,
      "followers": 20,
      "following": 0,
      "created_at": "2008-01-14T04:33:35Z",
      "updated_at": "2008-01-14T04:33:35Z"
    }
}
```

**Project**

```javascript
{
  "id": 101330762,
  "userId": "1",
  "project": {
      "name": "Hello-World",
      "description": "This your first repo!",
      "language": "Java",
      "ext_url": "https://github.com/octocat/Hello-World"
  }
}
```

**Interest**

```javascript
{
  "id": 709809,
  "userId": "1",
  "interest": "Pizza"
}
```

From the `colours` stub api (used for displaying a language's colour):

**Colour** 

```javascript
{
  "id": "Visual Basic",
  "colour": "#945db7"
}
```

## App Component Design
![][diagram]

## UI Design
![][ui1]
![][ui2]
![][ui3]

## Routes
Route | Description
--- | ---
/ | Login page if user is not logged in, dashboard otherwise
/users | Display a view of all public users
/profile | Logged in user's profile
/profile/:id | Public user's profile 
/project/:id | Display a particular project
/project/new | Create a new project
/interest/new | Create a new interest

## Extra features / Independent learning
+ Github OAuth using Firebase
+ Interact with Github API to fetch user data
+ Semantic React for CSS
+ React router 4
+ Persist state with Local storage

[ui1]: ./img/1.png
[ui2]: ./img/2.png
[ui3]: ./img/3.png
[diagram]: ./img/diagram.png