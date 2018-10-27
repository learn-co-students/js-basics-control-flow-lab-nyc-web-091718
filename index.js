// Write your code in this file!

function scuberGreetingForFeet(distance) {
  let response;
  if (distance <= 400) {
    response = "This one is on me!";
  } else if (distance > 1999 && distance <= 2500) {
    response = "I will gladly take your thirty bucks.";
  } else {
    response = "No can do.";
  }
  return response;
}

function ternaryCheckCity(city) {
  const reply = city === "NYC" ? "Ok, sounds good." : "No go.";
  return reply;
}

function switchOnCharmFromTip(tip) {
  let reply;
  switch (tip) {
    case "generous":
      reply = "Thank you so much.";
      break;
    case "not as generous":
      reply = "Thank you.";
      break;
    default:
      reply = "Bye.";
      break;
  }
  return reply;
}
