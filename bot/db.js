const client = require('./redis')

const save_game = (game) => {
    client.HMSET(game.id, game.repr())
}

exports.save_game = save_game

const load_game = () => new Promise((resolve, reject) => {
    resolve()
})

exports.load_game = load_game