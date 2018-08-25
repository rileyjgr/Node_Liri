require("dotenv").config();

'use strict';

const snoowrap = require('snoowrap');

// For more information on getting credentials, see here: https://github.com/not-an-aardvark/reddit-oauth-helper

exports.reddit =  {
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
  clientId: process.env.REDDIT_ID,
  clientSecret: process.env.REDDIT_SECRET,
  refreshToken: 'temporary'
}

console.log('Loaded Keys');
