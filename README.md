# Atlas Feedack API

## Technologies
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)

---

## Setup
First clone the repository from Github and switch to the new directory:

    $ git clone git@github.com:rafaellima-speedio/feedback-api.git
    $ cd feedback-api
    
Install the packages:

    $ npm install 

Create a .env file and add the following variables:
```.env
APP_PORT = 8000

CONNECTION_STRING = <your connection string>

NODE_ENV= local | dev | test | app
```

Start the API:

    $ node .