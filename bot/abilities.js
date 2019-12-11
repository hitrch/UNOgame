const abilities = 
{
    'four': ()=>
    {
       return (game, honest_check = false, result)=>
       {
          
              if (honest_check) 
              {
               let prev;
               let turn = game.now - game.turn
               if (turn < 0) {
                   prev = game.players.length + turn
               } else if (turn >= game.players.length){
                   prev = turn - game.players.length
               } else {
                   prev = turn
               }
                 for(let card in game.players[prev])
                 {
                     if(card.type == game.last_card.color)
                     {
                        game.players[prev].cards = game.players[prev].cards.concat(game.get_some_cards(4));
                        game.players[prev].cards.push(Object.assign({},game.last_card));
                        game.last_card = game.used_cards.splice(game.used_cards.length-1,1)[0];
                        result.bluffed = true;
                        break;
                     }
                 }
                 game.now_player().cards = game.now_player().cards.concat(game.get_some_cards(6));
                 result.bluffed = false;
              }
              else{
                game.now_player().cards = game.now_player().cards.concat(game.get_some_cards(4));
                result.check_honest = false;
              }
              return null;
       }
    },
    'reverse':  (game)=>
    {
       game.turn*=-1;
       return null;
    },
    'draw':  ()=>
    {
       return (game)=>
       {
          game.now_player().cards =  game.now_player().cards.concat(game.get_some_cards(2));
          game.next();
          return null;
       }
    },
    'skip':  ()=>
    {
       return (game)=>
       {
          game.next();
          return null;
       }
      },
    'color':  ()=>
    {
      return null;
    },
    'simple': (game)=>
    {
      //   let cards = game.now_player().cards;
      //   const i = cards.findIndex(c=>card.content == c.content && card.type == c.type);
      //   cards.splice(i,1);
      return null;
    },
    'draw_one': (game)=>
    {
        game.now_player().cards = game.now_player().cards.concat(game.get_some_cards(1));
        return null;
    }
}
module.exports = abilities;