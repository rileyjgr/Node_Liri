require("dotenv").config();


// inquirer for prompts
var inquirer = require('inquirer');
// node wrapper for reddit
var snoowrap = require('snoowrap');
//requests
var request = require('request');
var keys = require('./keys');

var reddit = new reddit(keys.reddit);

// Pull front page reddit

inquirer.prompt([

  {
    type: "input",
    name: "name",
    message: "What is your Reddit Username?"
  }])
  .then(function(redditUser){
  r.getSubmission(redditUser.name).author.name;
  console.log(JSON.stringify(data, null, 2));
})

console.log('it works');
/*   {
    type: "input",
    name: "FavoriteSubs",
    message: "What is your favorite Subreddit?"
  }


let redditUser =


let redditUser = process.argv[2];

console.log(redditUser);


let redditType = process.argv[3];

r.getUser(redditUser);

r.getSubreddit(redditType). // eh wtf?

 */
