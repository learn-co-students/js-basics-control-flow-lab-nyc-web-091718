// Write your code in this file!
function scuberGreetingForFeet(x) {
  if ( x <= 400 ) {
    return 'This one is on me!';
  }else if (x > 2000 && x <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }else if (x>2500) {
    return 'No can do.';
  }else {
    '?';
  }
};

function ternaryCheckCity(x) {
  let m;
  x === 'NYC' ? m = 'Ok, sounds good.' : m = 'No go.';
  return m;
};

function switchOnCharmFromTip(x) {
  let m
  switch (x) {
    case 'generous':
      m = 'Thank you so much.'
      break;
    case 'not as generous':
      m = 'Thank you.'
      break;
    default: m = 'Bye.';
  }
  return m;
}
