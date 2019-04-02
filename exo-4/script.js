// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

var last = secretMessage.pop();

var addLast = secretMessage.push('to','program');

var removeItem = secretMessage.splice(6, 1, 'right');

var removeFirst = secretMessage.shift();

var addFirst = secretMessage.unshift('Programming');

var removeItems = secretMessage.splice(5, 5, 'know');

var joinSecret = secretMessage.join(' ');



console.log(secretMessage);

console.log(joinSecret);