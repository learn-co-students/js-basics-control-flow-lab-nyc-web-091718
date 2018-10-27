function scuberGreetingForFeet(someValue) {
  // if ride is less than 400 feet then return the message 'This one is on me!'
  // if distance is over 2000 feet then return the message 'I will gladly take your thirty bucks.'
  // if ride distance is over 2500 then return the message 'No can do.'
  let message;
  if (someValue<400) {
    message = 'This one is on me!';
  } else if (someValue>2000 && someValue <2500) {
    message = 'I will gladly take your thirty bucks.';
  } else if (someValue>2500) {
    message = 'No can do.';
  }
  return message;
}

function ternaryCheckCity(city) {
  // if city is NYC then return 'Ok, sounds good.'
  // otherwise return 'No go.'
  let message = city === "NYC" ? 'Ok, sounds good.' : 'No go.';
  return message;
}

function switchOnCharmFromTip(tip) {
 // if the tip is 'generous', then return 'Thank you so much.'
 // if the tips is 'not as generous', then return 'Thank you.'
 //otherwise, return 'Bye.'
 let message;
 switch (tip) {
   case 'generous':
    message = 'Thank you so much.';
    break;
   case 'not as generous':
    message = 'Thank you.'
    break;
   default:
    message = 'Bye.';
    break;
 }
 return message;
}
