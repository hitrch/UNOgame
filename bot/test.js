const log = require("./objects");

let players = [new log.Player({id: 343, full_name: 'David'}),new log.Player({id: 340, full_name: 'Sonya'})];
let game = new log.Game({id: 3, players: players, });
console.log(game.start());
//game.shuffle(game.cards).forEach(player=> console.log(player.repr()));
console.log(game.players.forEach(player=> console.log(player.repr())));
console.log(game.players.length);
console.log(game.last_card.repr());
