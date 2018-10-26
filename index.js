

function scuberGreetingForFeet(someValue) {
  let result;

  if (someValue <= 400) {
    result = 'This one is on me!'
  } else if (someValue > 2000 && someValue < 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else {
    result = 'No can do.'
  }
   return result
}




function ternaryCheckCity(city) {
  let answer;
  if (city === 'NYC') {
    answer = 'Ok, sounds good.'
  } else if (city != 'NYC') {
    answer = 'No go.'
  }
 return answer
}




function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.'
  } else if (tip === 'not as generous') {
    return 'Thank you.'
  } else {
    return 'Bye.'
  }

}
