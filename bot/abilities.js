const abilities = 
{
    'four': ()=>
    {
       return (game, honest_check = false, result)=>
       {
              if (honest_check) 
              {
                 for(let card in game.players[game.now - game.turn])
                 {
                     if(card.type = game.last_card.color)
                     {
                        game.players[game.now - game.turn].cards =  game.players[game.now - game.turn].cards.concat(game.get_some_cards(4));
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