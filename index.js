function scuberGreetingForFeet(n){
  // Write your code here!
let greeting 
if( n<= 400 ) {
  return "This one is on me!";
} else if(n > 2500) {
  return "No can do."
} else if(n > 2000) {
  return "I will gladly take your thirty bucks."
}
}


function ternaryCheckCity(city){
  // Write your code here!
  return (city==="NYC"?"Ok, sounds good.":"No go.");
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case "generous":
      // code block
      return 'Thank you so much.';
      break;
      case "not as generous":
        // code block 
        return "Thank you.";
        break;
        default:
          // code block
          return "Bye.";
  }
}  