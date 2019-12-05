class Card {
    constructor(dict) {
        Object.assign(this, dict)
    }

    toString() {
        return JSON.stringify(this.repr())
    }

    repr() {
        return {
            id: this.id
        }
    }
}

exports.Card = Card

class Player {
    constructor(dict) {
        this.id = dict.id
        this.full_name = dict.full_name ? dict.full_name : dict.first_name + (dict.last_name ? ' ' + dict.last_name: '')
        this.cards = dict.cards
    }

    toString() {
        return JSON.stringify(this.repr())
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
        this.players = dict.players ? dict.players.map(pl => new Player(pl)): null
        this.turn = dict.turn || 1 // 1 | -1
        this.started = dict.started || false
    }

    now_player() {
        return this.players[this.now]
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

    repr() {
        return {
            id: this.id,
            players: JSON.stringify(this.players), // ? this.players.map((pl) => pl.repr()): null,
            now: this.now,
            turn: this.turn,
            started: this.started
        }
    }
}

exports.Game = Game