require("dotenv").config();


// inquirer for prompts
let inquirer = require('inquirer');
// node wrapper for reddit
let snoowrap = require('snoowrap');
//requests
let request = require('request');
const keys = require('./keys');
const id = keys.reddit;
// const id = new keys.reddit; this one doesnt work? why??!? ITS NOT A CLASS!!!!!!!!!
// Pull input from inquirer to display reddit user content.

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your Reddit Username?"
  }
  ]).then(function(redditUser){

  // this isnt pulling from snoowrap

  r.getSubmission(redditUser.name).author.name;
  console.log(JSON.stringify(data, null, 2));
// console.log('============Loaded user Content==================');
});


console.log('============Loaded user Content==================');

// add implemtation to pull stuff from users favorite subreddit.
/*
inquirer.prompt([
  {
    type: "input",
    name: "subReddit",
    message: "What is your favorite Subreddit?"
  }]).then(function(subReddit){
  r.getSubreddit(subReddit.name);
  console.log(JSON.stringify(data, null, 2));

console.log('============Loaded subreddit Content==================');



});

console.log('============Loaded subreddit Content==================');
 */
