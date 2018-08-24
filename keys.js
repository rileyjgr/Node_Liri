'use strict';

const snoowrap = require('snoowrap');

// For more information on getting credentials, see here: https://github.com/not-an-aardvark/reddit-oauth-helper

const r = new snoowrap({
  userAgent: 'put your user-agent string here',
  clientId: process.env.REDDIT_ID,
  clientSecret: process.env.REDDIT_SECRET,
  // refreshToken: 'put your refresh token here' not sure if this is needed
});

console.log('this is loaded');


/*

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
 */
