exports.getRandomFinal = function(){
  var finales = [
  {
    text: 'Final en Old Trafford. #ManUnited 3-0 #Stoke.',
    team1: '#ManUnited',
    team2: '#Stoke'
  },
  {
    text: 'Final en Mestalla. #Valencia 2-1 #Alavés.',
    team1: '#Valencia',
    team2: '#Alavés'
  },
  {
    text: 'Final en el Etihad. #ManCity 3-1 #Newcastle.',
    team1: '#ManCity',
    team2: '#Newcastle'
  },
  {
    text: 'Final en el St.Mary\'s Stadium. #Southampton 1-1 #Tottenham.',
    team1: '#Southampton',
    team2: '#Tottenham'
  },
  {
    text: 'Final en el Liberty Stadium. #Swansea 1-0 #Liverpool.',
    team1: '#Swansea',
    team2: '#Liverpool'
  },
  {
    text: 'Final en el Sur de Londres. #CrystalPalace 1-1 #Newcastle.',
    team1: '#CrystalPalace',
    team2: '#Newcastle'
  },
  {
    text: 'Final en el Anfield. #Liverpool 2-2 #Tottenham.',
    team1: '#Liverpool',
    team2: '#Tottenham'
  },
  {
    text: 'Final en Vicarage Road. #Watford 3-1 #Chelsea.',
    team1: '#Watford',
    team2: '#Chelsea'
  },
  {
    text: 'Final en Wembley. #Tottenham 1-0 #Arsenal.',
    team1: '#Tottenham',
    team2: '#Arsenal'
  },
  {
    text: 'Final en el Kirklees Stadium. #Huddersfield 4-1 #Bournemouth.',
    team1: '#Huddersfield',
    team2: '#Bournemouth'
  },
  {
    text: 'Final en St.James\' Park. #Newcastle 1-0 #ManUnited.',
    team1: '#Newcastle',
    team2: '#ManUnited'
  },
  {
    text: 'Final en el St. Mary\'s Stadium. #Southampton 0-2 #Liverpool.',
    team1: '#Southampton',
    team2: '#Liverpool'
  },
  {
    text: 'Final en Basilea. #Basel 0-4 #ManCity.',
    team1: '#Basel',
    team2: '#ManCity'
  },
  {
    text: 'Final en Turín. #Juventus 2-2 #Tottenham.',
    team1: '#Juventus',
    team2: '#Tottenham'
  },
  {
    text: 'Final en Oporto. #Porto 0-5 #Liverpool.',
    team1: '#Porto',
    team2: '#Liverpool'
  },
  {
    text: 'Final en el Santiago Bernabéu. #RealMadrid 3-1 #PSG.',
    team1: '#RealMadrid',
    team2: '#PSG'
  },
  {
    text: 'Final en Londres. #Chelsea 4-0 #Hull.',
    team1: '#Chelsea',
    team2: '#Hull'
  },
  {
    text: 'Final en el DW Stadium. #Wigan 1-0 #ManCity.',
    team1: '#Wigan',
    team2: '#ManCity'
  },
  {
    text: 'Final en Londres. #Chelsea 1-1 #Barcelona.',
    team1: '#Chelsea',
    team2: '#Barcelona'
  },
  {
    text: 'Final en Múnich. #Bayern 5-0 #Besiktas.',
    team1: '#Bayern',
    team2: '#Besiktas'
  },
  {
    text: 'Final en el King Power Stadium. #Leicester 1-1 #Stoke.',
    team1: '#Leicester',
    team2: '#Stoke'
  },
  {
    text: 'Final en Anfield. #Liverpool 4-1 #WestHam.',
    team1: '#Liverpool',
    team2: '#WestHam'
  },
  {
    text: 'Final en Londres. #CrystalPalace 0-1 #Tottenham.',
    team1: '#CrystalPalace',
    team2: '#Tottenham'
  },
  {
    text: 'Final en Old Trafford. #ManUnited 2-1 #Chelsea.',
    team1: '#ManUnited',
    team2: '#Chelsea'
  },
  {
    text: 'Final en Londres: #Arsenal 0-3 #ManCity.',
    team1: '#Arsenal',
    team2: '#ManCity'
  },
  {
    text: 'Final en Turf Moor. #Burnley 2-1 #Everton.',
    team1: '#Burnley',
    team2: '#Everton'
  },
  {
    text: 'Final en Londres. #Tottenham 2-0 #Huddersfield.',
    team1: '#Tottenham',
    team2: '#Huddersfield'
  },
  {
    text: 'Final en Anfield. #Liverpool 2-0 #Newcastle.',
    team1: '#Liverpool',
    team2: '#Newcastle'
  },
  {
    text: 'Final en Manchester. #ManCity 1-0 #Chelsea.',
    team1: '#ManCity',
    team2: '#Chelsea'
  },
  {
    text: 'Final en Londres. #CrystalPalace 2-3 #ManUnited.',
    team1: '#CrystalPalace',
    team2: '#ManUnited'
  },
  {
    text: 'Final en Liverpool. #Liverpool 0-0 #Porto.',
    team1: '#Liverpool',
    team2: '#Porto'
  },
  {
    text: 'Final en París. #PSG 1-2 #RealMadrid.',
    team1: '#PSG',
    team2: '#RealMadrid'
  },
  {
    text: 'Final en Manchester. #ManCity 1-2 #Basel.',
    team1: '#ManCity',
    team2: '#Basel'
  },
  {
    text: 'Final en Wembley. #Tottenham 1-2 #Juventus.',
    team1: '#Tottenham',
    team2: '#Juventus'
  },
  {
    text: 'Final en Old Trafford. #ManUnited 2-1 #Liverpool.',
    team1: '#ManUnited',
    team2: '#Liverpool'
  },
  {
    text: 'Final en Londres. #Chelsea 2-1 #CrystalPalace.',
    team1: '#Chelsea',
    team2: '#CrystalPalace'
  },
  {
    text: 'Final en Londres. #Arsenal 3-0 #Watford.',
    team1: '#Arsenal',
    team2: '#Watford'
  },
  {
    text: 'Final en el Vitality Stadium. #Bournemouth 1-4 #Tottenham.',
    team1: '#Bournemouth',
    team2: '#Tottenham'
  },
  {
    text: 'Final en Roma. #Roma 1-0 #Shakhtar.',
    team1: '#Roma',
    team2: '#Shakhtar'
  },
  {
    text: 'Final en Manchester. #ManUnited 1-2 #Sevilla.',
    team1: '#ManUnited',
    team2: '#Sevilla'
  },
  {
    text: 'Final en Estambul. #Besiktas 1-3 #Bayern.',
    team1: '#Besiktas',
    team2: '#Bayern'
  },
  {
    text: 'Final en el Camp Nou. #Barcelona 3-0 #Chelsea.',
    team1: '#Barcelona',
    team2: '#Chelsea'
  },
  {
    text: 'Final en el Liberty Stadium. #Swansea 0-3 #Tottenham.',
    team1: '#Swansea',
    team2: '#Tottenham'
  },
  {
    text: 'Final en Old Trafford. #ManUnited 2-0 #Brighton.',
    team1: '#ManUnited',
    team2: '#Brighton'
  },
  {
    text: 'Final en Londres. #Arsenal 3-0 #Stoke.',
    team1: '#Arsenal',
    team2: '#Stoke'
  },
  {
    text: 'Final en Stamford Bridge. #Chelsea 1-3 #Tottenham.',
    team1: '#Chelsea',
    team2: '#Tottenham'
  },
  {
    text: 'Final en Turín. #Juventus 0-3 #RealMadrid.',
    team1: '#Juventus',
    team2: '#RealMadrid'
  },
  {
    text: 'Final en Sevilla. #Sevilla 1-2 #Bayern.',
    team1: '#Sevilla',
    team2: '#Bayern'
  },
  {
    text: 'Final en el Camp Nou. #Barcelona 4-1 #Roma.',
    team1: '#Barcelona',
    team2: '#Roma'
  },
  {
    text: 'Final en Anfield. #Liverpool 3-0 #ManCity.',
    team1: '#Liverpool',
    team2: '#ManCity'
  },
  {
    text: 'Final en Goodison Park. #Everton 0-0 #Liverpool.',
    team1: '#Everton',
    team2: '#Liverpool'
  },
  {
    text: 'Final en Manchester. #ManCity 2-3 #ManUnited.',
    team1: '#ManCity',
    team2: '#ManUnited'
  },
  {
    text: 'Final en el Emirates. #Arsenal 3-2 #Southampton.',
    team1: '#Arsenal',
    team2: '#Southampton'
  },
  {
    text: 'Final en Manchester. #ManCity 1-2 #Liverpool.',
    team1: '#ManCity',
    team2: '#Liverpool'
  },
  {
    text: 'Final en Roma. #Roma 3-0 #Barcelona.',
    team1: '#Roma',
    team2: '#Barcelona'
  },
  {
    text: 'Final en Múnich. #Bayern 0-0 #Sevilla.',
    team1: '#Bayern',
    team2: '#Sevilla'
  },
  {
    text: 'Final en Madrid. #RealMadrid 1-3 #Juventus.',
    team1: '#RealMadrid',
    team2: '#Juventus'
  },
  {
    text: 'Final en el St. Mary\'s Stadium. #Southampton 2-3 #Chelsea.',
    team1: '#Southampton',
    team2: '#Chelsea'
  },
  {
    text: 'Final en Newcastle upon Tyne. #Newcastle 2-1 #Arsenal.',
    team1: '#Newcastle',
    team2: '#Arsenal'
  },
  {
    text: 'Final en Old Trafford. #ManUnited 0-1 #WestBrom.',
    team1: '#ManUnited',
    team2: '#WestBrom'
  },
  {
    text: 'Final en The Hawthorns. #WestBrom 2-2 #Liverpool.',
    team1: '#WestBrom',
    team2: '#Liverpool'
  },
  {
    text: 'Final en Londres. #ManUnited 2-1 #Tottenham.',
    team1: '#ManUnited',
    team2: '#Tottenham'
  },
  {
    text: 'Final en Anfield: #Liverpool 5-2 #Roma.',
    team1: '#Liverpool',
    team2: '#Roma'
  },
  {
    text: 'Final en Múnich. #Bayern 1-2 #RealMadrid.',
    team1: '#Bayern',
    team2: '#RealMadrid'
  },
  {
    text: 'Final en Anfield. #Liverpool 0-0 #Stoke.',
    team1: '#Liverpool',
    team2: '#Stoke'
  },
  {
    text: 'Final en el London Stadium. #WestHam 1-4 #ManCity.',
    team1: '#WestHam',
    team2: '#ManCity'
  },
  {
    text: 'Final en el Santiago Bernabéu. #RealMadrid 2-2 #Bayern.',
    team1: '#RealMadrid',
    team2: '#Bayern'
  },
  {
    text: 'Final en el Olímpico. #Roma 4-2 #Liverpool.',
    team1: '#Roma',
    team2: '#Liverpool'
  },
  {
    text: 'Final en Stoke on Trent. #Stoke 1-2 #CrystalPalace.',
    team1: '#Stoke',
    team2: '#CrystalPalace'
  },
  {
    text: 'Final en el Etihad Stadium. #ManCity 0-0 #Huddersfield.',
    team1: '#ManCity',
    team2: '#Huddersfield'
  },
  {
    text: 'Final en el Emirates Stadium. #Arsenal 5-0 #Burnley.',
    team1: '#Arsenal',
    team2: '#Burnley'
  },
  {
    text: 'Final en Stamford Bridge. #Chelsea 1-0 #Liverpool.',
    team1: '#Chelsea',
    team2: '#Liverpool'
  },
  {
    text: 'Final en Wembley. #Chelsea 1-0 #ManUnited.',
    team1: '#Chelsea',
    team2: '#ManUnited'
  },
  {
    text: 'Final en Wembley. #Inglaterra 2-1 #Nigeria.',
    team1: '#Inglaterra',
    team2: '#Nigeria'
  },
  {
    text: 'Final en Luzhniki. #Rusia 5-0 #ArabiaSaudí.',
    team1: '#Rusia',
    team2: '#ArabiaSaudí'
  },
  {
    text: 'Final en el Ekaterinburg Arena. #Egipto 0-1 #Uruguay.',
    team1: '#Egipto',
    team2: '#Uruguay'
  },
  {
    text: 'Final en St. Petersburg: #Marruecos 0-1 #Iran.',
    team1: '#Marruecos',
    team2: '#Iran'
  },
  {
    text: 'Final en Sochi. #Portugal 3-3 #España.',
    team1: '#Portugal',
    team2: '#España'
  },
  {
    text: 'Final en Kazan. #Francia 2-1 #Australia.',
    team1: '#Francia',
    team2: '#Australia'
  },
  {
    text: 'Final en Moscú. #Argentina 1-1 #Islandia.',
    team1: '#Argentina',
    team2: '#Islandia'
  },
  {
    text: 'Final en Saransk. #Perú 0-1 #Dinamarca.',
    team1: '#Perú',
    team2: '#Dinamarca'
  },
  {
    text: 'Final en Samara. #CostaRica 0-1 #Serbia.',
    team1: '#CostaRica',
    team2: '#Serbia'
  },
  {
    text: 'Final en Nizhni Nóvgorod. #Suecia 1-0 #CoreadelSur.',
    team1: '#Suecia',
    team2: '#CoreadelSur'
  },
  {
    text: 'Final en Sochi. #Bélgica 3-0 #Panamá.',
    team1: '#Bélgica',
    team2: '#Panamá'
  },
  {
    text: 'Final en Volgogrado. #Túnez 1-2 #Inglaterra.',
    team1: '#Túnez',
    team2: '#Inglaterra'
  },
  {
    text: 'Final en Saransk. #Colombia 1-2 #Japón.',
    team1: '#Colombia',
    team2: '#Japón'
  },
  {
    text: 'Final en Moscú. #Polonia 1-2 #Senegal.',
    team1: '#Polonia',
    team2: '#Senegal'
  },
  {
    text: 'Final en Luzhniki. #Portugal 1-0 #Marruecos.',
    team1: '#Portugal',
    team2: '#Marruecos'
  },
  {
    text: 'Final en Nizhny Novgorod. #Argentina 0-3 #Croacia.',
    team1: '#Argentina',
    team2: '#Croacia'
  },
  {
    text: 'Final en Ekaterimburgo. #Francia 1-0 #Perú.',
    team1: '#Francia',
    team2: '#Perú'
  },
  {
    text: 'Final en Rostov. #Uruguay 1-0 #ArabiaSaudí.',
    team1: '#Uruguay',
    team2: '#ArabiaSaudí'
  },
  {
    text: 'Final en Kazan. #Irán 0-1 #España.',
    team1: '#Irán',
    team2: '#España'
  },
  {
    text: 'Final en Kazan. #Francia 4-3 #Argentina',
    team1: '#Francia',
    team2: '#Argentina'
  },
  {
    text: 'Final en Sochi. #Uruguay 2-1 #Portugal',
    team1: '#Uruguay',
    team2: '#Portugal'
  },
  {
    text: 'Final en Volgogrado. #Japón 0-1 #Polonia',
    team1: '#Japón',
    team2: '#Polonia'
  },
  {
    text: 'Final en Samara. #Senegal 0-1 #Colombia',
    team1: '#Senegal',
    team2: '#Colombia'
  },
  {
    text: 'Final en Kaliningrado. #Inglaterra 0-1 #Bélgica',
    team1: '#Inglaterra',
    team2: '#Bélgica'
  },
  {
    text: 'Final en Saransk. #Panamá 1-2 #Túnez',
    team1: '#Panamá',
    team2: '#Túnez'
  },
  {
    text: 'Final en Kazan. #CoreadelSur 2-0 #Alemania',
    team1: '#CoreadelSur',
    team2: '#Alemania'
  },
  {
    text: 'Final en San Petersburgo. #Nigeria 1-2 #Argentina',
    team1: '#Nigeria',
    team2: '#Argentina'
  },
  {
    text: 'Final en Rostov. #Islandia 1-2 #Croacia',
    team1: '#Islandia',
    team2: '#Croacia'
  },
  {
    text: 'Final en Kaliningrado. #España 2-2 #Marruecos',
    team1: '#España',
    team2: '#Marruecos'
  },
  {
    text: 'Final en Londres. #Chelsea 2-0 #Bournemouth',
    team1: '#Chelsea',
    team2: '#Bournemouth'
  },
  {
    text: 'Final en Watford. #Watford 2-1 #CrystalPalace',
    team1: '#Watford',
    team2: '#CrystalPalace'
  },
  {
    text: 'Final en Anfield. #Liverpool 1-0 #Brighton',
    team1: '#Liverpool',
    team2: '#Brighton'
  },
  {
    text: 'Final en Londres. #Tottenham 1-2 #Liverpool',
    team1: '#Tottenham',
    team2: '#Liverpool'
  }];

  return finales[Math.floor(Math.random() * finales.length)];
}
