
exports.getRandom = function() {
    var managers = [
    {
        text: 'Klopp'
    },
    {
        text: 'Pellegrino'
    },
    {
        text: 'Guardiola'
    },
    {
        text: 'Pochettino'
    },
    {
        text: 'Conte'
    },
    {
        text: 'Mourinho'
    },
    {
        text: 'Zidane'
    },
    {
        text: 'Benítez'
    },
    {
        text: 'Sarri'
    },
    {
        text: 'Solari'
    },
    {
        text: 'Solskjaer'
    }];

  return managers[Math.floor(Math.random() * managers.length)].text;
};