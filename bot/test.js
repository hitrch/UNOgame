const log = require("./objects");
const readline = require('readline');
let players = [new log.Player({id: 343, full_name: 'David'}),new log.Player({id: 340, full_name: 'Sonya'})];
let game = new log.Game({id: 3, players: players, });
game.start();
console.log('Last card: ',game.last_card, game.last_card.is_special());
console.log('Now player: ',game.now_player().repr());
console.log('Possible cards: ', game.possible_cards.map(card=>card.repr()));
//game.shuffle(game.cards).forEach(player=> console.log(player.repr()));
console.log(game.players.forEach(player=>console.log(player.repr())));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let result = {};
  while(!result.loser)  
  {
    let question = result.last_card.content == 'four' ? 'Bluff 1/0' : 'Step';
    rl.question(question, (answer) => {
      // TODO: Log the answer in a database
      if(result.possible_cards == [])
      {
        game.pass();
      }
      else if (result.last_card.content = 'four')
      {
        game.check_honest(parseInt(asnwer)>=1 ? true : false);
      }
      result = game.put_card(game.possible_cards[parseInt(answer)]);
      console.log('Possible cards: ',result.possible_cards);
      console.log('Now player: ', result.now_player.repr());
      console.log('Last card: ',game.last_card.repr());
    });
  }
  rl.question('Step ', (answer) => {
    // TODO: Log the answer in a database
    if(result.possible_cards == [])
    {
      game.pass();
    }
    else if (this.last_card.content = four)
    result = game.put_card(game.possible_cards[parseInt(answer)]);
    console.log('Possible cards: ',result.possible_cards);
    console.log('Now player: ', result.now_player.repr());
    console.log('Last card: ',game.last_card.repr());
  });
  rl.close();