# Toothcrate-backend Coder Academy Term 3 Project -

### Backend half (server, API, database) for a dental practice inventory system.

* The project outline was to: Design, build, deploy and present an application
  built for a real world customer. Meet with the business owner or organisation
  manager to find out what challenges they face. Find a problem that you can
  solve with an application and present your ideas to the client.

* Please see [this repo](https://github.com/DeadFred121/toothcrate-front) for a
  detailed README file. [Project Link](http://toothcrate.netlify.com)

### Tech Stack

![tech stack](./documentation/node_mongo.png)

## Getting Started

### Installation

* The database is hosting on mlab and the server hosted through heroku:
  https://toothcrate.herokuapp.com/api/inventory
* Or you can download the project to the local drive and run it from there:

Clone the server side repo:

```
$ git clone https://github.com/FilipMaslovaric/Toothcrate-backend
```

Change into the project directory, and install the dependencies:

```
$ yarn install
```

```
$ yarn run dev
```

If you have mongodb installed start it your local machine:

```
$ mongod
```

Create a `.env` file and fill in the following keys with your database values.
Email me for the details and a key for your JWT without quotes:

```
DB_ADDRESS=<database value here>
JWTSECRET=<secret phrase here>
```

Run the backend server on localhost:3001 by running:

```
yarn start
```

Then

#### Open application

```
Navigate to localhost:3001 in your web browser
```

Signup and navigate away...
