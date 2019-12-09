const abilities = 
{
    'four': ()=>
    {
       return (game, honest_check = false)=>
       {
              if (honest_check) 
              {
                 for(let card in game.players[game.now - game.turn])
                 {
                     if(card.type = game.last_card.color)
                     {
                        game.players[game.now - game.turn].cards =  game.players[game.now - game.turn].cards.concat(game.get_some_cards(4));
                        break;
                     }
                 }
                 game.now_player().cards = game.now_player().cards.concat(game.get_some_cards(6));
              }
              else{
                game.now_player().cards = game.now_player().cards.concat(game.get_some_cards(4));
              }
              return null;
       }
    },
    'reverse':  ()=>
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
    'simple': (game,card)=>
    {
        let cards = game.now_player().cards;
        const i = cards.findIndex(c=>card.content == c.content && card.type == c.type);
        cards.splice(i,1);
    },
    'draw_one': (game)=>
    {
        game.now_player().cards = game.now_player().cards.concat(game.get_some_cards(1));
        return null;
    }
}

module.exports.abilities = abilities;