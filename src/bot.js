// /** @flow */

const Twit = require('twit');
//const config = require('./config');
const getPrediccion = require('./helpers/getPrediccion');


const bot = new Twit(config);


// async function tweetIt (txt) {  
//     try {
//       await bot.post('statuses/update', { status: txt });
//       var now = new Date();
//       console.log('TWEET SENT: '+ now.toLocaleTimeString() + '\n' + txt);
//       console.log('------------------');
//     } catch (err) {
//       console.log('ERR: ' + err);
//       console.log('------------------');
//     }
// };

//setInterval(() => tweetIt(getPrediccion()), 60000 * 120);
//tweetIt(getPrediccion());

function log(){
  console.log(getPrediccion());
  console.log('------------------');
}; 


setInterval(log, 200 * 1);
// console.log(getPrediccion());
// console.log('------------------');
// console.log(getPrediccion());
