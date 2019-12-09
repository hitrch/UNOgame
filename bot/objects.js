let card_deck = require("./uno_cards");
let abilities = require("./abilities")
let possibilities = require("./possibilities")
class Card {
    constructor(dict) {
        Object.assign(this, dict)
    }

    toString() {
        return JSON.stringify(this.repr())
    }
    is_special()
    {
       return this.content == "four" || this.content == "skip" || this.content == "draw" || this.content == "color" 
       || this.content == "reverse";
    }
    repr() {
        return {
            id: this.id,
            content: this.content,
            type: this.type
        }
    }
}

exports.Card = Card

class Player {
    constructor(dict) {
        this.id = dict.id
        this.full_name = dict.full_name ? dict.full_name : dict.first_name + (dict.last_name ? ' ' + dict.last_name: '')
        this.cards = dict.cards ? dict.cards.map(card=>new Card(card)) : [];
    }

    toString() {
        return JSON.stringify(this.repr())
    }
    remove_card(card)
    {
        const i = this.cards.findIndex(
            c => c.content === card.content && c.type === card.type,
          );
          return this.cards.splice(i, 1);
    }
    repr() {
        return {
            id: this.id,
            full_name: this.full_name,
            cards: this.cards ? this.cards.map((card) => card.repr()): null
        }
    }
}

exports.Player = Player

class Game {
    constructor(dict) {
        this.id = dict.id
        this.now = dict.now || 0
        this.last_card = dict.last_card ? new Card(dict.last_card) : null;
        this.used_cards = dict.used_cards ? dict.used_cards.map(card=>new Card(card)) : [];
        this.cards = dict.cards ? dict.cards.map(card=>new Card(card)): [];  
        this.possible_cards = dict.possible_cards ? dict.possible_cards.map(card=>new Card(card)): []; 
        this.players = dict.players ? dict.players.map(pl => new Player(pl)): [];
        this.turn = dict.turn || 1 // 1 | -1
        this.winner = dict.winner? dict.winner : 0;   //1 | 0
        this.ability = abilities[dict.ability] ? abilities[dict.ability]() : null;
    }

    now_player() {
        return this.players[this.now]
    }

    repr() {
        return {
            id: this.id,
            now: this.now,
            last_card: JSON.stringify(this.last_card),
            used_cards: JSON.stringify(this.used_cards),
            cards: JSON.stringify(this.cards),
            possible_cards: JSON.stringify(this.possible_cards),
            players: JSON.stringify(this.players), // ? this.players.map((pl) => pl.repr()): null,
            turn: this.turn,
            ability: this.last_card.content,
            winner: this.winner
        }
    }

    add_player(dict)
    {
        if(this.players.length > 10) throw new Error('Full room!');
        let player = new Player(dict);      //check 
        this.players.push(player);
    }
    remove_player(dict)
    {
       this.players = this.players.filter(player=>player.id!=dict.id);
       this.now--;
    }
    next(turns = 1) {
        const turn = this.now + turns * this.turn
        if (turn < 0) {
            this.now = this.players.length + turn
        } else if (turn >= this.players.length){
            this.now = turn - this.players.length
        } else {
            this.now = turn
        }
    }

    shuffle(array) {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i+1)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
          return array;
      }

    reload_cards()
    {
        let card_list = this.shuffle([...this.used_cards]);
        this.used_cards = [];
        card_list = card_list.concat(this.cards);
        this.cards = this.shuffle(card_list);
    }

    get_some_cards(count)
    {
        let some_cards = [];
        if (this.cards.length < count)
        {
            this.reload_cards();
        }
        else if (this.cards.length > count)
        {
            for(let i = 0; i< count -1; i++)
            {
                some_cards.push(...this.cards.splice(this.getRandomInt(0,this.cards.length-1),1))
            }
            return some_cards;
        }
    }
    drop(card)
    {
        this.used_cards.push(this.last_card);
        this.last_card = card;            //need check
    }
    get_start_cards() 
    {
        return this.get_some_cards(7);
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    start()
    {
        if(this.is_over()) throw new Error('Not enough players to start!')
        this.shuffle(card_deck).forEach((card)=>
        {
            for(let i = 0; i<card.quantity; i++)
            {
                this.cards.push(new Card(card));
            }
        })
        this.players.forEach(player => {
            player.cards = this.get_start_cards();
        });
        this.players = this.shuffle(this.players);
        // this.now = this.getRandomInt(0, this.players.length-1);
        this.last_card = this.cards.splice(this.getRandomInt(0,this.cards.length-1),1)[0];
        return {'start': true, 'possible_cards': this.end_turn()};
    }
    add_possible()
    {
       this.possible_cards = [];
       let content = this.last_card.is_special() ? this.last_card.content : 'simple';
       let poss_cards = possibilities[content](this.last_card);
       
           for(let card in this.now_player().cards)
           {
            for (let poss in poss_cards)
            {
              for(let key in poss_cards[poss])
              {
                 if(!card[key] == poss_cards[poss][key]) break;
              }
              this.possible_cards.push(card);
           }
           }
    }

    check_possible(poss_card)
    {
        return this.possible_cards.findIndex(card=> card.content == poss_card.content && card.type == poss_card.type) == -1 ? false :true;
    }

    check_results(result)
    {   
           if(this.no_cards())
           {
            let status_exit = this.winner == 1 ? 'finished' : 'winner';
            result[status_exit] = this.now_player().player.repr();
            this.remove_player(now_player());
            this.winner = 1;
           } 
    }
    check_over(result, callback)
    {
        if(this.is_over()) 
        {
            result['loser'] = this.players[0].repr();
        }
        else callback();
    }
    put_card(dict)
    {
       let card = new Card(dict);
       let content = card.is_special() ? card.content : 'simple';
       if(check_possible(card))
       {
           let return_object = {};
           this.ability = abilities[content](this,card); //!
           this.drop(this.now_player().remove_card(card));
           this.check_win(return_object);
           this.check_over(return_object, ()=>
           {
            return_object.possible_cards = this.end_turn();
           });
           return return_object;
       }
       else throw new Error('Put away your card!');

        
    }
    check_honest(check_honest = false)
    {
        this.ability = this.ability(check_honest);
        return this.end_turn();
    }
    end_turn()
    {
        this.next();
        this.add_possible();
        return this.possible_cards;  //!
    }
    pass()
    {
        let call = this.ability || abilities['draw_one'];
        this.ability = call(this);
        return this.end_turn();
    }
    is_over()
    {
        return this.players.length <=1;
    }
    no_cards()
    {
        return this.players[this.now].cards.length == 0;
    }
}
exports.Game = Game;