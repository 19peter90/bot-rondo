
exports.getRandomForward = function() {
    var delanteros = [
    {
        text: 'Agüero'
    },
    {
        text: 'Silva'
    },
    {
        text: 'Sané'
    },
    {
        text: 'Lukaku'
    },
    {
        text: 'Martial'
    },
    {
        text: 'Lingard'
    },
    {
        text: 'Alexis Sánchez'
    },
    {
        text: 'Rashford'
    },
    {
        text: 'Harry Kane'
    },
    {
        text: 'Son'
    },
    {
        text: 'Dele Alli'
    },
    {
        text: 'Mohamed Salah'
    },
    {
        text: 'Firmino'
    },
    {
        text: 'Mané'
    },
    {
        text: 'Morata'
    },
    {
        text: 'Giroud'
    },
    {
        text: 'Hazard'
    },
    {
        text: 'Willian'
    },
    {
        text: 'Lacazette'
    },
    {
        text: 'Aubameyang'
    },
    {
        text: 'Vardy'
    },
    {
        text: 'Sterling'
    },
    {
        text: 'Gabriel Jesús'
    },
    {
        text: 'Arnautovic'
    },
    {
        text: 'Mahrez'
    },
    {
        text: 'Benteke'
    },
    {
        text: 'Zaha'
    },
    {
        text: 'Dembélé'
    },
    {
        text: 'Luis Suárez'
    },
    {
        text: 'Messi'
    },
    {
        text: 'Coutinho'
    },
    {
        text: 'Cristiano Ronaldo'
    },
    {
        text: 'Benzema'
    },
    {
        text: 'Asensio'
    },
    {
        text: 'Lucas Vázquez'
    },
    {
        text: 'Ben Yedder'
    },
    {
        text: 'Müller'
    },
    {
        text: 'Lewandowski'
    },
    {
        text: 'Higuaín'
    },
    {
        text: 'Edin Dzeko'
    },
    {
        text: 'Neymar'
    },
    {
        text: 'Mbappé'
    },
    {
        text: 'Cavani'
    },
    {
        text: 'Di María'
    }
];

  return   delanteros[Math.floor(Math.random() * delanteros.length)].text;
};





