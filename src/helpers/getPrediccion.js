// // /** @flow */
const Finales = require('./Finales');
const Claves = require('./Claves');

const getPrediccion = () => {
  var final = Finales.getRandomFinal(),
      clave1 =  "▪️ " + Claves.getRandom().replace("*team1*", final.team1).replace("*team2*", final.team2) + "\n",
      clave2 =  "▪️ " + Claves.getRandom().replace("*team1*", final.team1).replace("*team2*", final.team2) + "\n",
      clave3 =  "▪️ " + Claves.getRandom().replace("*team1*", final.team1).replace("*team2*", final.team2) + "\n",
      clave4 =  "▪️ " + Claves.getRandom().replace("*team1*", final.team1).replace("*team2*", final.team2),
      prediccion = '🔚 ' + final.text + "\n" + clave1 + clave2 + clave3 + clave4;

  if (prediccion.length > 280){
    var claveToRemove = getClaveMasCorta(clave1, clave2, clave3, clave4);
    prediccion = prediccion.replace(claveToRemove, '');
  }

  return prediccion;
};

var getClaveMasCorta = function(clave1, clave2, clave3, clave4) {
  var claveToRemove;

    if(clave1.length >= clave2.length){
      if(clave2.length >= clave3.length){
        if(clave3.length >= clave4.length){
          claveToRemove = clave4;
        }else{
          claveToRemove = clave3;
        }
      }else if (clave2.length >= clave4.length){
        claveToRemove = clave4;
      } else {
        claveToRemove = clave2;
      }
    } else if(clave1.length >= clave3.length){
        if(clave3.length >= clave4.length){
          claveToRemove = clave4;
        }else{
          claveToRemove = clave3;
        }
      }else if (clave1.length >= clave4.length){
        claveToRemove = clave4;
      } else {
        claveToRemove = clave1;
      }

      return claveToRemove;
  };

module.exports = getPrediccion;