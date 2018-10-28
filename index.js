// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue < 400){
    return "This one is on me!";
  }  else if (someValue > 400 && someValue < 2500){
    return 'I will gladly take your thirty bucks.';
  } else{
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  let phrase;
  city === "NYC" ? (phrase =  "Ok, sounds good.") : (phrase = "No go.")
  return phrase
}


function switchOnCharmFromTip(someValue) {
  let phrase;
  switch(someValue){
    case 'generous':
      phrase = "Thank you so much.";
      break;
    case 'not as generous':
      phrase = "Thank you.";
      break;
    default:
      phrase = "Bye."
  }
  return phrase
}
