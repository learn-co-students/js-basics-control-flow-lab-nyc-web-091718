function scuberGreetingForFeet(feet) {
  let message;
  if (feet <= 400) {
      message = "This one is on me!";
  } else if (feet > 2500) {
      message = "No can do.";
  } else {
      message = "I will gladly take your thirty bucks.";
  }
  return message
}

function ternaryCheckCity(city) {
  var message2 = "NYC" === city ? "Ok, sounds good." : "No go.";
  return message2
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
        return 'Thank you so much.';
        break;
    case "not as generous":
        return 'Thank you.';
        break;
    default:
        return 'Bye.'
  }
}
