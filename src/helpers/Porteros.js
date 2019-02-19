
exports.getRandom = function() {
    var porteros = [
    {
        text: 'Petr Cech'
    },
    {
        text: 'Courtois'
    },
    {
        text: 'Karius'
    },
    {
        text: 'Ederson'
    },
    {
        text: 'Iker Casillas'
    },
    {
        text: 'Butland'
    },
    {
        text: 'Buffon'
    },
    {
        text: 'De Gea'
    },
    {
        text: 'Keylor Navas'
    }];

  return porteros[Math.floor(Math.random() * porteros.length)].text;
};