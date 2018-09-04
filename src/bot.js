// /** @flow */

const Twit = require('twit');
const config = require('./config');
// const config2 = {
//   consumer_key: "XZVgT1Nn6CzNI9ari9z6nfxWfY",
//   consumer_secret: "3PtXWDyDntAtqBqb0FhXin0fmEvtKWq5D0uXC6hCovJG7yK2PJ",
//   access_token: "1008802026514472965-Pxt7g9MNlGhVpeyQfhUqGWaDoKHA1Z",
//   access_token_secret: "CryoTvAJvNd19K1sYqqvqxo3N65EfR55c97Onny4lcgS0"
// };

const bot = new Twit(config);

import {
  getPrediccion
} from './helpers';

console.log('BOT READY...');

async function tweetIt (txt) {  
    try {
      await bot.post('statuses/update', { status: txt });
      var now = new Date();
      console.log('TWEET SENT: '+ now.toLocaleTimeString() + '\n' + txt);
      console.log('------------------');
    } catch (err) {
      console.log('ERR: ' + err);
      console.log('------------------');
    }
};

//setInterval(() => tweetIt(getPrediccion()), 60000 * 120);
//tweetIt(getPrediccion());

function log(){
  console.log(getPrediccion());
  console.log('------------------');
}; 


setInterval(log, 60000 * 1);
// console.log(getPrediccion());
// console.log('------------------');
// console.log(getPrediccion());
//now rm MirondoBot --safe --yes && 