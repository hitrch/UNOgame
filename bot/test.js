const log = require("./objects");
const readline = require('readline');
const abilities = require('./abilities')
let players = [new log.Player({id: 343, full_name: 'David'}),new log.Player({id: 340, full_name: 'Sonya'})];
let game = new log.Game({id: 3, players: players, });
game.start();
// console.log('Last card: ',game.last_card, game.last_card.is_special());
// console.log('Now player: ',game.now_player().repr());
// console.log('Possible cards: ', game.possible_cards.map(card=>card.repr()));
// console.log(game.players.forEach(player=>console.log(player.repr())));
game.last_card = game.cards.splice(game.cards.findIndex(card=> card.content == 'four'),1)[0];
console.log(game.last_card)
console.log(game.now_player().repr());
console.log(game.now);
console.dir(game.end_turn());
console.log(game.now);
console.log(game.now_player().repr());
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Cheoose color ', (answer) => {
  // TODO: Log the answer in a database
  
  game.set_color(answer);
  console.log(game.last_card)
  game.ability = abilities['four']();
  game.next();
 console.log(game.check_honest(true));
  rl.close();
});



