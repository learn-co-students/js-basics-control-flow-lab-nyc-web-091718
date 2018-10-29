// Write your code in this file!
function scuberGreetingForFeet(val){
  if (val > 2500){
    return "No can do."
  }
  else if (val > 2000){
    return "I will gladly take your thirty bucks.";
  }
  else if (val < 400){
    return "This one is on me!";
  }
}

function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(tip){
  if (tip === "generous"){
    return "Thank you so much."
  }
  else if (tip === "not as generous"){
    return "Thank you."
  }
  else{
    return "Bye."
  }
}
