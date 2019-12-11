const possibilities = {
    'four': (card)=>
    {
        return [];
    },
    'reverse': (card)=>
    {
       return [{'content': 'reverse'}, {'type': card.type}];
    },
    'draw': (card)=>
    {
       return [{'content': card.content}, {'type': card.type}];
    },
    'skip': (card)=>
    {
       return [{'content': 'skip', 'type': card.type}];
    },
    'color': (card)=>
    {
        return [{'type': card.color}];
    },
    'simple': (card)=>
    {
        return [{'content': card.content}, {'type': card.type}];
    },
    'any': (card)=>
    {
        return [{type: card.color || card.type}];
    }

}
module.exports = possibilities;