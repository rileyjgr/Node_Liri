require("dotenv").config();

'use strict';
// requests
const axios = require('axios');
let request = require('request');
// inquirer for prompts
let inquirer = require('inquirer');
// node wrapper for reddit
let snoowrap = require('snoowrap');

const r = new snoowrap({
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
  clientId: process.env.REDDIT_ID,
  clientSecret: process.env.REDDIT_SECRET,
  refreshToken: 'temporary'
})
const keys = require('./keys');
const id = keys.reddit;

// const id = new keys.reddit; this one doesnt work? why??!? ITS NOT A CLASS!!!!!!!!! F
// Pull input from inquirer to display reddit user content.

inquirer.prompt([
  {
    type: "input",
    name: "userName",
    message: "What is your Reddit Username?"
  },{
    type: "input",
    name: "subReddit",
    message: "What is your favorite Sub-Reddit?"
  },{
    type: "confirm",
    name: "userRedditData",
    message: "Would you like to look at your reddit user data?"
  },{
    type: "confirm",
    name: "subRedditData",
    message: "Would you like to see data for your favorite Sub Reddit?"
  }, {
    type: "confirm",
    name: "getTop",
    message: "Would you like to see the top post this week?"
  }
]).then(function(answers){
  let userName = answers.userName;
  let subReddit = answers.subReddit;
  let uRd = answers.userRedditData;
  let sRd = answers.subRedditData;
  let getFrontPage = answers.getTop;

//Pulls user data
  if (uRd) {
   axios.get('https://www.reddit.com/u/' + userName + 'top.json?count=2%27')
   .then(res => console.log(res.data.data.children))

   .catch(err => console.log(err.response));
  }

//Pulls subreddit data
if (sRd) {
    axios.get('https://www.reddit.com/r/' + subReddit + 'top.json?count=2%27')
    .then(res => console.log(res.data.data.children))

    .catch(err => console.log(err.response));
  }

//Pulls data from the front page of reddit
  if (getFrontPage){
    axios.get('https://www.reddit.com/top.json?count=2')
    .then(res => console.log(res.data.data.children))

  .catch(err => console.log(err.response));
  }
});


/*   if (getFrontPage = true){
    request
    .get('')
    .on('response', function(response){
      console.log(response.statusCode) //200
      console.log(response.headers['content-type'])
    })
    console.log();
  } */
/*    request(r.getHot().map(post => post.title), (function(error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    }).catch(function(error){
      console.log("DENIED MOTHAFUCKER");

  })); */
