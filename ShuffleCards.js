

  // Create a deck: 52 cards (Simple version)

  let suits = ["♠", "♥", "♣", "♦"];
  let ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  let deck =[]

  for(let i=0; i<suits.length; i++){
    for(let j=0; j<ranks.length ; j++){
        deck.push(ranks[j])
    }
  }

  console.log(deck);

  