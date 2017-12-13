# Github Resume

Name: Dimitra Zuccarelli

## Overview
Github Resume is an express/angular app which allows users to log in with their GitHub account and create a resume from their bio and repo information in under 5 minutes. It also allows both logged in and non-logged in users to view public user profiles. 

Some features include:
 
 + Log in with Github 
 + Automatically generate a profile from your Github user page
 + Automatically generate a list of skills based on your Github repo languages
 + Modify, add and delete projects
 + Modify, add and delete interests
 + View public profiles
 + Search for public users by location or username

## Technologies
The main technologies used include:

Express server:
+ Passport JS
+ Passport Github strategy
+ JWT
+ Express Validation, Joi
+ Mongoose, Mongoose-validators

Angular app: 
+ HTTPClient module
+ Angular flash messages
+ Angular interceptors, guards, services

A complete list of dependencies for each can be found in the respective `package.json` files.  

## Server-side
### API 

**authentication**

Route | Description
--- | ---
GET /auth/login | authenticate with github
GET /auth/logout | log out
GET /auth/return | return logged in user

**users**

Route | Description
--- | ---
GET /api/users | get all users
GET /api/users:id | get user by id
POST /api/users/ | create a new user
PUT /api/users/:id | update a user
DELETE /api/users/:id | delete a user

String queries are also supported. A few examples:
+ `GET /api/users?location=Germany&login=octocat`
+ `GET /api/users?_id=1234`

**projects**

Route | Description
--- | ---
GET /api/users/:user_id/projects | get projects for user
GET /api/users/:user_id/projects/:id | get specific project for user
POST /api/users/:user_id/projects | create a new project
PUT /api/users/:user_id/projects/:id | update a project
DELETE /users/:user_id/projects/:id | delete a project

String queries are also supported. A few examples:
+ `GET /api/projects?language=Clojure&userId=3456`
+ `GET /api/projects?_id=1234`

**interests**

Route | Description
--- | ---
GET /api/users/:user_id/interests | get interests for user
GET /api/users/:user_id/interests/:id | get specific interest for user
POST /api/users/:user_id/interests | create a new interest
PUT /api/users/:user_id/interests/:id | update an interest
DELETE /api/users/:user_id/interests/:id | delete an interest

### Data Model Design

**User**

Details section modelled from Github API - [`GET /users/:username`](https://api.github.com/users/octocat)
```javascript
{
  "_id": "5a305baa08b1e245ce3feac8",
  "login": "octocat",
  "github_id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "bio": "There once was...", 
}
```

**Project**

```javascript
{
  "id": 101330762,
  "userId": "1",
  "name": "Hello-World",
  "description": "This your first repo!",
  "language": "Java",
  "ext_url": "https://github.com/octocat/Hello-World"
}
```

**Interest**

```javascript
{
  "id": 709809,
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

## Client-side
### UI
![](https://raw.githubusercontent.com/dimitraz/github-resume-react/master/client/img/1.png?token=AH5DBZfsUPhCpal8n4haje-ucaVPGoupks5aOqzgwA%3D%3D)
![](https://raw.githubusercontent.com/dimitraz/github-resume-react/master/client/img/2.png?token=AH5DBZLAj4dDZq5-d6ibu0tdqjuUT8U9ks5aOq0HwA%3D%3D)
![](https://raw.githubusercontent.com/dimitraz/github-resume-react/master/client/img/3.png?token=AH5DBTZFyDPrQOnFk3dNT241FEFuw6C6ks5aOqz4wA%3D%3D)

-------------------------------------

## Extra features / Independent learning
* Passport JS and github-passport for Github authentication 
* JSON web tokens for authenticated client-server communications 
* Mongoose-validators for validating Mongoose Schemas
* Express-validation for query validation
* Docker for MongoDB container 
* AWS for cloud deployment 
* Angular 4 for front end (HTTPClient module, guards, interceptors, services for interacting with backend API)