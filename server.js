const express = require('express');
const marvelCharacters = require('./MarvelCharacters.json');

// Used express module to implement the API's
const app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://custom-coding-exercise.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 
//READ Request Handlers
app.get('/', (req, res) => {
  res.send('Welcome to Marvel REST API with Node.js.');
});

//  Get API to read the characters JSON and sending as response
app.get('/api/v1/characters', (req,res)=> {
  res.send(marvelCharacters);
});
 
// Health Check API
app.get('/api/v1/health', (req, res)=> {
  res.send({status: "UP"});
});

// listen for requests
const port = process.env.PORT || 5000;

module.exports = app.listen(port, () => {
    console.log("Server is listening on port " + port + ". Go to http://localhost:"+ port + " to access it.");
});
