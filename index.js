function defineSuit(card) {
    let regex = /\w/gi;
    let suit = card.replace(regex,"")  
    switch (suit) {
      case '♣':
        return 'clubs';
        break;
      case '♦':
        return 'diamonds';
        break;
      case '♥':
        return 'hearts'
        break;
       case '♠':
        return 'spades';
        break;
       default: console.log("Sorry we have an error.")
    }
}