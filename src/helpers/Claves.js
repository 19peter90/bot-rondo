const Medios = require('./Medios');
const Delanteros = require('./Delanteros');

exports.getRandom = function(){
    var claves = [
    {
        text: Medios.getRandom() + ' con confianza es un show.'
    },
    {
        text: Delanteros.getRandom() + ' sigue a lo suyo, en silencio. Gran rendimiento.'
    },
    {
        text: 'Tiene trabajo Paul Lambert (firmó hoy) en *team2*.'
    },
    {
        text: 'Partido muy bonito, ritmo alto, de una portería a otra.'
    },
    {
        text: 'Eliminatoria abierta. Se espera una vuelta preciosa.'
    },
    {
        text: 'Muy pobre *team2*, con 18% de posesión.'
    },
    {
        text: 'Interesante ver al joven Zinchenko en banda izquierda en *team1*.'
    },
    {
        text: Delanteros.getRandom() + '. El mejor delantero del momento.'
    },
    {
        text: 'Parece, Pellegrino salva el puesto una semana más.'
    },
    {
        text: 'Debutó Obafemi, de sólo 17 años.'
    },
    {
        text: 'Los Reds no estuvieron fluidos. Sólo al final apretaron, fruto de la exigencia, más allá de ideas claras.'
    },
    {
        text: Delanteros.getRandom() + ' lleva unas jornadas "light".'
    },
    {
        text: 'Mereció bastante más *team1*.'
    },
    {
        text: '*team2* sigue inmerso en racha gris: 2 victorias en 17 jornadas'
    },
    {
        text: Delanteros.getRandom() + ', vital en *team1*. Estandarte.'
    },
    {
        text: 'Sigue preocupando la sequía de ' + Delanteros.getRandom() + '.'
    },
    {
        text: Delanteros.getRandom() + ' es escandaloso. Temporadón.'
    },
    {
        text: 'Hubo polémica al final, pero resultado justo viendo el partido.'
    },
    {
        text: 'Partidazo de ' + Delanteros.getRandom() + '.'
    },
    {
        text: Delanteros.getRandom() + ' alcanza los 100 goles ligueros con el *team2*.'
    },
    {
        text: 'Sólo una victoria de *team2* en las últimas 5 jornadas.'
    },
    {
        text: '7 goles encajados en sus 2 últimos partidos.'
    },
    {
        text: 'Primer gran partido de Deulofeu con el *team1*.'
    },
    {
        text: 'Peligra la plaza #UCL de *team2*.'
    },
    {
        text: '*team2* a 6 puntos de #UCL.'
    },
    {
        text: Delanteros.getRandom() + ' es escandaloso.'
    },
    {
        text: Delanteros.getRandom() + ', sin espacios, desaparecido.'
    },
    {
        text: 'Gran partido de ' + Medios.getRandom() + '.'
    },
    {
        text: 'Petr Cech evitando goleada de *team1*.'
    },
    {
        text: 'Triunfo vital para los de Benítez de cara a la permanencia.'
    },
    {
        text: '2 derrotas de *team2* en 3 jornadas.'
    },
    {
        text: 'El nivel de ' + Medios.getRandom() + ' tras su lesión sigue muy lejos de su versión TOP.'
    },
    {
        text: 'Gran partido de ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'El rendimiento de ' + Delanteros.getRandom() + ' es un escándalo.'
    },
    {
        text: '*team1* en descenso.'
    },
    {
        text: 'Brutal racha liguera de *team2*: sólo 2 derrotas desde octubre.'
    },
    {
        text: '¿Cómo afectará la vuelta de #UCL al *team2*?'
    },
    {
        text: 'Hizo acto de prensencia el rodillo de los de Guardiola.'
    },
    {
        text: 'Eliminatoria casi sentenciada.'
    },
    {
        text: 'Solidez total de *team2*. ¿Dónde está su techo?'
    },
    {
        text: 'Muy poquito de *team1*. Recibió un duro golpe pronto y no reaccionó.'
    },
    {
        text: 'Disfruten del show de ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'PARTIDAZO cumpliendo las expectativas.'
    },
    {
        text: Delanteros.getRandom() + ', una noche más, una vez más.'
    },
    {
        text: Delanteros.getRandom() + ' es un jugadorazo infravalorado.'
    },
    {
        text: 'Recital de los de Jurgen Klopp.'
    },
    {
        text: 'Eliminatoria prácticamente sentenciada.'
    },
    {
        text: Delanteros.getRandom() + ' está firmando una temporada extraordinaria.'
    },
    {
        text: 'La calidad individual de *team1* marcó la diferencia.'
    },
    {
        text: 'La entrada de ' + Delanteros.getRandom() + ', clave.'
    },
    {
        text: Delanteros.getRandom() + ' y la #UCL, una historia que parece infinita.'
    },
    {
        text: 'Excesivo castigo para un buen *team2*, sobre todo en el 2º tiempo.'
    },
    {
        text: 'Un primer tiempo fantástico del *team1* fue suficiente.'
    },
    {
        text: Delanteros.getRandom() + ' puso la magia.'
    },
    {
        text: 'Gran partido del joven (17 años) Ampadu, quien fue titular.'
    },
    {
        text: 'Minutos para canteranos como Hudson-Odoi y Scott.'
    },
    {
        text: 'Bombazo del torneo.'
    },
    {
        text: 'Fue superior el *team2*, pese a jugar con 10 desde antes del descanso.'
    },
    {
        text: Delanteros.getRandom() + ' aprovechó un grave error defensivo para tumbar al líder de la #EPL.'
    },
    {
        text: Medios.getRandom() + ' salió en la segunda parte, pero no fue suficiente.'
    },
    {
        text: 'PARTIDAZO de ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Dominó más la posesión el *team2*, pero sin peligro para Courtois.'
    },
    {
        text: 'Perdonó el *team1*, pero el que nunca perdona se llama ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Mínima ventaja para el *team2*. Partido de vuelta TOP.'
    },
    {
        text: 'Se cumplió la lógica.'
    },
    {
        text: '*team1* sentencia la eliminatoria.'
    },
    {
        text: 'La defensa de *team2* fue un juguete.'
    },
    {
        text: 'Sin hacer ruido, ' + Delanteros.getRandom() + ' firma registros TOP año a año.'
    },
    {
        text: 'Sigue el *team1* en racha irregular (2 victorias en 11 jornadas).'
    },
    {
        text: '*team2* seguirá una semana más en descenso.'
    },
    {
        text: '*team1* se coloca segundo.'
    },
    {
        text: 'El tridente ' + Delanteros.getRandom() +'-' + Delanteros.getRandom() + '-' + Delanteros.getRandom() + ' sigue a lo suyo.'
    },
    {
        text: 'Los de Klopp siguen confirmándose como uno de los clubes más goleadores del continente.'
    },
    {
        text: Delanteros.getRandom() + ' al rescate sobre la bocina.'
    },
    {
        text: 'Los de Pochettino lo merecieron, sobre todo en la 2ª mitad.'
    },
    {
        text: '*team1* tienen un calendario MUY difícil. Mala pinta.'
    },
    {
        text: 'Partidazo de ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'La semana de ' + Delanteros.getRandom() + ' ha sido TOP.'
    },
    {
        text: 'Si comparamos la defensa y el ataque de *team1* parecen equipos diferentes.'
    },
    {
        text: '*team2*, fuera de puestos #UCL.'
    },
    {
        text: 'Los de Guardiola finiquitaron el partido a la media hora.'
    },
    {
        text: '\'Sobró\' el segundo tiempo.'
    },
    {
        text: 'Soberbio primer tiempo de ' + Delanteros.getRandom() + '.'
    },
    {
        text: '*team1* ve peligrar la plaza europea: ahora mismo a 8 puntos.'
    },
    {
        text: '*team1* se afianza como séptimo.'
    },
    {
        text: '*team2* puede acabar la jornada fuera del TOP 10.'
    },
    {
        text: 'Muy poquito de *team2*.'
    },
    {
        text: Delanteros.getRandom() + ' sigue maravillando.'
    },
    {
        text: 'Poco trabajo para Karius, en líneas generales.'
    },
    {
        text: 'Este *team2* no tiene rumbo claro en liga.'
    },
    {
        text: 'Volvió el #WengerOUT a la grada.'
    },
    {
        text: '*team1* coge oxígeno y respira en la tabla.'
    },
    {
        text: '*team2* YA está a 13 puntos de #UCL.'
    },
    {
        text: 'Nulo de ideas *team2*. Ederson, espectador de lujo.'
    },
    {
        text: 'De nuevo, Conte llegando tarde con los cambios.'
    },
    {
        text: Medios.getRandom() + ' clave en el momento importante.'
    },
    {
        text: '*team2*, a 5 puntos de #UCL.'
    },
    {
        text: '*team2* mantiene la 2ª plaza. '
    },
    {
        text: 'Surgieron efecto los cambios Shaw, Mata y ' + Delanteros.getRandom() +'.'
    },
    {
        text: 'Imperdible el zapatazo de ' + Medios.getRandom() + ' en el descuento.'
    },
    {
        text: '*team1*, antepenúltimo.'
    },
    {
        text: '¿Ha sido el último partido de Iker Casillas en #UCL?'
    },
    {
        text: 'Partido trámite tras la goleada de la Ida. Pues eso.'
    },
    {
        text: Delanteros.getRandom() + ' y la #UCL. Una historia con spoiler eterno.'
    },
    {
        text: 'Quiso el *team1* en el primer tiempo, pero no obtuvo premio alguno.'
    },
    {
        text: 'Gran partido de ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Trámite superado para los de Guardiola. Están dentro.'
    },
    {
        text: 'El *team2*, pese a sus pocas opciones, dio la cara.'
    },
    {
        text: 'El estado de forma de ' + Medios.getRandom() + ' es fantástico.'
    },
    {
        text: 'Eliminatoria ESPECTACULAR.'
    },
    {
        text: Delanteros.getRandom() + ' es TOP. Volvió loco a Barzagli.'
    },
    {
        text: '*team2* no se derrumbó y en 3 minutos de locura consiguió el pase.'
    },
    {
        text: Delanteros.getRandom() + ' apareció, una vez más.'
    },
    {
        text: 'La tuvo ' + Delanteros.getRandom() + ' en el 89 para la prórroga.'
    },
    {
        text: 'Paso TOP de *team1* por la 2ª plaza.'
    },
    {
        text: 'Mejoró *team2* en 2ª parte, pero sin premio.'
    },
    {
        text: Delanteros.getRandom() + ' sigue sin aparecer esta temporada.'
    },
    {
        text: 'Perdonó *team1* y sufrió un poco al final.'
    },
    {
        text: '¿Qué debe hacer ' + Delanteros.getRandom() + ' para marcar un gol?'
    },
    {
        text: 'Salió ' + Delanteros.getRandom() + ' en la 2ª mitad y mejoró *team2*. Nada nuevo.'
    },
    {
        text: Delanteros.getRandom() + ' firmando un 2018 TOP.'
    },
    {
        text: 'Partido más igualado que lo que refleja el resultado.'
    },
    {
        text: 'Cech alcanza los 200 partidos con portería a 0 en su carrera.'
    },
    {
        text: 'El momento de forma de ' + Delanteros.getRandom() + ' es extraordinario.'
    },
    {
        text: 'Se fueron con molestias ' + Delanteros.getRandom() + ' y ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Gran partido de ' + Medios.getRandom() + '. Cuando aparece, es un show.'
    },
    {
        text: 'Clasificado *team1* con global de 2-2.'
    },
    {
        text: Delanteros.getRandom() + ' es un delantero maravilloso. Su gol da la clasificación a los suyos.'
    },
    {
        text: 'Héroe ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Tenía mucho que perder, pero también mucho que ganar. Valiente *team2*.'
    },
    {
        text: 'Qué escándalo es ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Partidazo de Lenglet. No era fácil.'
    },
    {
        text: 'Pese a tener todo muy encarado, buen partido de *team1*.'
    },
    {
        text: 'Espectacular la afición del *team2*.'
    },
    {
        text: 'La eliminatoria de ' + Delanteros.getRandom() + ': 3 goles, 1 asistencia.'
    },
    {
        text: '*team2* ha estado mejor de lo que decían las expectativas en la eliminatoria.'
    },
    {
        text: 'Partido flojo de Courtois.'
    },
    {
        text: 'Gol importante para ' + Delanteros.getRandom() + '.'
    },
    {
        text: '*team2* jugará las Semifinales de #FACup en Wembley.'
    },
    {
        text: 'Superiores los de Pochettino.'
    },
    {
        text: 'Qué bueno es Eriksen.'
    },
    {
        text: 'Eliminación "positiva" para el *team1* peleando por no descender.'
    },
    {
        text: 'El *team1* jugará las Semifinales de la #FACup.'
    },
    {
        text: 'Por algo Mourinho se va al fin del mundo con ' + Medios.getRandom() + '. Jugadorazo.'
    },
    {
        text: 'Empieza a coger ritmo de nuevo ' + Delanteros.getRandom() + ', poco a poco.'
    },
    {
        text: 'Mereció algo más el *team1* hoy.'
    },
    {
        text: 'Partido gris, en líneas generales, que para nada reflejó un marcador así.'
    },
    {
        text: 'Partidazo de Butland. Porterazo.'
    },
    {
        text: 'El *team1* dice prácticamente \'adiós\' a la #UCL para la próxima temporada.'
    },
    {
        text: 'Partidazo de ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'El *team2* detonó el partido con un completo segundo tiempo.'
    },
    {
        text: 'No se le esperaba hasta mayo. ' + Delanteros.getRandom() + ' is back.'
    },
    {
        text: 'Colosal el partido de ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Golpe de autoridad total del *team2*.'
    },
    {
        text: 'Nueva temporada sin premio para Buffon.'
    },
    {
        text: 'Con 0·0 Sarabia tuvo un ocasión clarísima y de forma surrealista la mandó fuera.'
    },
    {
        text: '*team1* encarrila la eliminatoria, como se esperaba.'
    },
    {
        text: 'Es noticia: no marcó ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Curiosa la estadística del *team1* con goles a favor en propia.'
    },
    {
        text: 'Pura efectividad y electricidad del *team1*.'
    },
    {
        text: 'Lesionado ' + Delanteros.getRandom() + '. No pareció grave.'
    },
    {
        text: 'Quiso mejorar *team2* en el tramo final, pero sin premio.'
    },
    {
        text: 'Noche mágica para los de Klopp.'
    },
    {
        text: 'Le salieron "bien" las rotaciones a Klopp pensando en la #UCL.'
    },
    {
        text: '*team1* firmó un final de partido muy bueno.'
    },
    {
        text: '*team1* debe esperar para ser campeón matemático.'
    },
    {
        text: 'Apasionante derbi.'
    },
    {
        text: '*team2* sigue opositando al descenso.'
    },
    {
        text: '5 de los 6 goles de Aubameyang como jugador del *team1* han sido en casa.'
    },
    {
        text: 'Partidazo de ' + Delanteros.getRandom() + '.'
    },
    {
        text: Delanteros.getRandom() + ' es descomunal.'
    },
    {
        text: 'La eliminatoria de ' + Delanteros.getRandom() + '.'
    },
    {
        text: '*team2* quiso reaccionar al final, pero ya era tarde.'
    },
    {
        text: 'Partido más parejo de lo esperado en la posesión.'
    },
    {
        text: 'Digna eliminatoria de *team2*.'
    },
    {
        text: 'Dignísimo partido de *team2*. '
    },
    {
        text: Delanteros.getRandom() + ', de penalti, rescató al campeón de Europa.'
    },
    {
        text: 'Buffon fue expulsado en el descuento.'
    },
    {
        text: 'Desaprovechando oportunidades así, *team1* lo tiene muy complicado.'
    },
    {
        text: 'Where is ' + Delanteros.getRandom() + '? Un gol en 2018.'
    },
    {
        text: 'Suma y sigue el *team1* de Rafa Benítez.'
    },
    {
        text: 'El colista se llevó los 3 puntos en casa del 2º.'
    },
    {
        text: 'Mereció más *team1*.'
    },
    {
        text: Delanteros.getRandom() + ', a lo suyo. 31 goles del egipcio.'
    },
    {
        text: 'Desaparecido ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'De más a menos el *team2*. Empezaron valientes, pero perdieron presencia y lo pagaron.'
    },
    {
        text: '70 minutos en modo Jumanji del *team1*.'
    },
    {
        text: 'Por surrealista que suene, *team2* sueña.'
    },
    {
        text: Delanteros.getRandom() + ' es MARAVILLOSO.'
    },
    {
        text: 'Partidazo de ' + Medios.getRandom() + '.'
    },
    {
        text: Delanteros.getRandom() + ', show en la sombra.'
    },
    {
        text: 'Cambio de guión sin ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Gran final de partido de *team2*.'
    },
    {
        text: 'De más a menos *team1*. Notaron el cansancio.'
    },
    {
        text: 'Robben, Boateng y Carvajal, lesionados.'
    },
    {
        text: 'Volvió a aparecer ' + Delanteros.getRandom() + ' en una eliminatoria continental.'
    },
    {
        text: Delanteros.getRandom() + ', el comodín de Zidane.'
    },
    {
        text: 'No ' + Delanteros.getRandom() + ', no party.'
    },
    {
        text: '*team2*, con dos partidos más ahora mismo, virtualmente descendido.'
    },
    {
        text: '*team1* suma 102 goles a favor, con 3 jornadas por disputar. Pinta a récord. Con 1, igualan. Con 2, superan.'
    },
    {
        text: Delanteros.getRandom() + ' sigue haciendo, en silencio, un trabajo excepcional.'
    },
    {
        text: 'Colosal partido de Sergio Ramos.'
    },
    {
        text: 'Digna eliminatoria de ' + Delanteros.getRandom() + ' de lateral.'
    },
    {
        text: Delanteros.getRandom() + ' está infravaloradisimo.'
    },
    {
        text: Delanteros.getRandom() + ' demostrando que su temporadón no es casualidad.'
    },
    {
        text: 'Eliminatoria muy digna de *team1*.'
    },
    {
        text: 'Errores graves sentenciaron los sueños de *team1*.'
    },
    {
        text: '*team1*, matemáticamente, descendido.'
    },
    {
        text: 'El final de temporada del *team2* con Roy Hodgson es bárbaro.'
    },
    {
        text: 'Sigue la estadística positiva del *team2* con ' + Delanteros.getRandom() + '.'
    },
    {
        text: '0 minutos para Yaya Touré en su último partido con *team1*.'
    },
    {
        text: 'Último partido de Mertesacker.'
    },
    {
        text: 'Fiesta en la despedida de Wenger ante su afición.'
    },
    {
        text: 'El rendimiento de ' + Delanteros.getRandom() + ' sigue dando puntos al *team1*.'
    },
    {
        text: Delanteros.getRandom() + ' es espectacular.'
    },
    {
        text: 'Primer tiempo para *team1*. Mejoró *team2* en la 2ª mitad.'
    },
    {
        text: 'Partido gris de las referencias ofensivas de ambos equipos.'
    },
    {
        text: 'Suma y sigue ' + Delanteros.getRandom() + '. Jugador franquicia.'
    },
    {
        text: '*team2*, de menos a más. Sensación de tener buenos nombres, pero poco colectivo.'
    },
    {
        text: 'Muchas pruebas en ambos combinados.'
    },
    {
        text: 'Qué bueno es Godín.'
    },
    {
        text: 'El encuentro perdió ritmo en la segunda parte.'
    },
    {
        text: 'Conociendo sus limitaciones, ordenado *team2*, cerrando muy bien espacios.'
    },
    {
        text: Delanteros.getRandom() + '.'
    },
    {
        text: '*team1* sobrevivió por un jugador extraordinario. Pegada pura.'
    },
    {
        text: 'No tuvo su noche De Gea.'
    },
    {
        text: Delanteros.getRandom() + ' brilló para rescatar a los suyos.'
    },
    {
        text: 'Demasiado premio para *team1*.'
    },
    {
        text: 'Mooy es muy bueno. Veremos si cambia de equipo.'
    },
    {
        text: 'Aguantó perfecto *team2* en bloque. Pocos espacios.'
    },
    {
        text: Delanteros.getRandom() + ' la tuvo de penalti.'
    },
    {
        text: 'El bloque de *team2* sigue intacto.'
    },
    {
        text: '*team1* sigue teniendo grandes estrellas, pero pocas ideas.'
    },
    {
        text: '*team1* falló un penalti.'
    },
    {
        text: '¿Clave la suplencia de ' + Delanteros.getRandom() + '?'
    },
    {
        text: 'Le faltó mordiente arriba a *team1*. De más a menos totalmente.'
    },
    {
        text: 'Keylor Navas salvó a los suyos de un resultado mayor.'
    },
    {
        text: 'Muy interesante seguir el torneo del serbio ' + Medios.getRandom() + '.'
    },
    {
        text: 'De nuevo el VAR define un partido.'
    },
    {
        text: '*team2* firmó buenos tramos, pero no concretó el peligro.'
    },
    {
        text: '*team1* plasmando estilo: rocosos, sólidos y gran efectividad.'
    },
    {
        text: 'Se cumplió la lógica en el marcador, no en las sensaciones.'
    },
    {
        text: 'Más calidad individual que colectiva en *team1*.'
    },
    {
        text: 'Con espacios son un equipo demoledor.'
    },
    {
        text: 'Valiente *team2* hasta el descanso. Superaron expectativas.'
    },
    {
        text: 'SIEMPRE ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Muy trabajada tácticamente *team2*.'
    },
    {
        text: 'El penalti y expulsión a los 3 minutos marcó el partido.'
    },
    {
        text: 'Muy buenos minutos de ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Pese a jugar con 10, digno partido de *team1*. Sí lo notó en la segunda parte algo más.'
    },
    {
        text: 'No aparecieron las esperadas estrellas, ' + Delanteros.getRandom() + ' y ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Partido muy errático de *team1*. Demasiado. Lo pagó caro.'
    },
    {
        text: Delanteros.getRandom() + ' volvió a ser determinante.'
    },
    {
        text: 'Mereció mucho más *team2*, pero no obtuvo premio alguno.'
    },
    {
        text: 'Buen partido de Amrabat.'
    },
    {
        text: 'La vuelta, en una semana. Lo pasaremos bien.'
    },
    {
        text: 'Vienen curvas en el partido de vuelta.'
    },
    {
        text: Delanteros.getRandom() + '. Ladies and gentlemen.'
    },
    {
        text: '¿Por qué los jugadores protestan decisiones del VAR?'
    },
    {
        text: '*team2* acumula muchas figuras mediáticas, pero no son un bloque.'
    },
    {
        text: Delanteros.getRandom() + ' se impone al ruido mediático.'
    },
    {
        text: Delanteros.getRandom() + ' buen partido, insisto, desde las sombras.'
    },
    {
        text: 'OFICIAL. *team1*, campeón.'
    },
    {
        text: '*team2* llegará al próximo partido eliminado. Sin opciones de clasificación.'
    },
    {
        text: '¿Está haciendo *team1* el campeonato perfecto? Seguramente no a nivel estadístico.'
    },
    {
        text: Delanteros.getRandom() + '. Please, don\'t go this summer.'
    },
    {
        text: '*team1* ganó cómoda por el resultado, pero no por sensaciones.'
    },
    {
        text: 'Hemos visto esa versión esperada de *team1*, cumpliendo con el hype que les sobrevuela.'
    },
    {
        text: 'De más a menos.'
    },
    {
        text: 'Minutos para ' + Delanteros.getRandom() + '. Partido importante para él y su futuro.'
    },
    {
        text: 'FAV si te mola *team1*.'
    },
    {
        text: '11 goles en 2 partidos. Nada mal el domingo en #Rusia2018.'
    },
    {
        text: '¡'+ Delanteros.getRandom() + ' de mi vida!'
    },
    {
        text: 'Fantástico torneo hasta ahora de *team2*.'
    },
    {
        text: 'Gustándose *team1*. Vaya show en metros finales.'
    },
    {
        text: 'Qué capacidad para definir tiene ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Partidazo de ' + Delanteros.getRandom() + ', más allá de los goles.'
    },
    {
        text: '*team1* sigue con su dinámica ajustada, pero ya están en 1/4.'
    },
    {
        text: 'Dos bloques (' + Medios.getRandom() + '-' + Delanteros.getRandom() + ' y ' + Delanteros.getRandom() + '-' + Delanteros.getRandom() + ') para el sueño de *team1*.'
    },
    {
        text: 'Físicamente, partidazo de *team1*.'
    },
    {
        text: 'Partidazo de ' + Delanteros.getRandom() + '. Extraordinario.'
    },
    {
        text: 'Obra de arte de ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Sensacional Lucas Hernández por banda izquierda.'
    },
    {
        text: 'BRUTAL ' + Delanteros.getRandom() + '. Velocidad, potencia, desequilibrio y definición. Partidazo.'
    },
    {
        text: Delanteros.getRandom() + ' es escandaloso.'
    },
    {
        text: Delanteros.getRandom() + ', damas y caballeros.'
    },
    {
        text: 'La entrada de ' + Delanteros.getRandom() + ' dinamitó ataque local.'
    },
    {
        text: 'Vital ' + Delanteros.getRandom() + '. Sin firmar un partido excelente, gol vital.'
    },
    {
        text: 'Valiente partido *team2*. Firmaron un fantástico 2º tiempo.'
    },
    {
        text: 'Fichajazos del *team1* con ' + Delanteros.getRandom() + ' y ' + Medios.getRandom() + '.'
    },
    {
        text: 'Puntos vitales para la permanencia de futuros meses.'
    },
    {
        text: 'Partido igualado y muy entretenido.'
    },
    {
        text: 'Planteamiento rústico de *team1*.'
    },
    {
        text: Delanteros.getRandom() + ' sigue en un desierto deportivo.'
    },
    {
        text: 'La adaptación de ' + Medios.getRandom() + ' es fantástica.'
    },
    {
        text: 'Cada vez más dudas ' + Delanteros.getRandom() + '.'
    },
    {
        text: 'Inicio liguero TOP de ' + Medios.getRandom() + '.'
    },
    {
        text: 'Partido típico de inicio de temporada con las defensas ajustándose.'
    },
    {
        text: '*team2* mejor en la 1ª mitad. Se igualó todo en la 2ª.'
    },
    {
        text: '*team2* sigue invicto. 15/15 puntos.'
    },
    {
        text: 'Faltó juego exterior (sobre todo ' + Medios.getRandom() +') en *team1*.'
    },
    {
        text: 'Lo de ' + Medios.getRandom() + ' sin minutos empieza a ser un poco raro.'
    },
    {
        text: Delanteros.getRandom() + ', el silencioso.'
    },
    {
        text: 'Cómo me recuerda ' + Medios.getRandom() + ' a Beckham en el balón parado.'
    },
    {
        text: 'Imbatido *team1*. 15/15 puntos.'
    },
    {
        text: '¿Peligra Benítez?'
    },
    {
        text: 'Doblete de ' + Delanteros.getRandom() + ' desde el silencio mediático.'
    },
    {
        text: 'Volvió ' + Delanteros.getRandom() + '. Sonríe *team1*.'
    },
    {
        text: 'Protagonista ' + Medios.getRandom() + ': gol y asistencia.'
    },
    {
        text: 'Sarri, una vez más, con cambios estériles.'
    },
    {
        text: 'Protagonista el VAR.'
    },
    {
        text: 'Partido más incómodo de lo esperado para los de Solari.'
    },
    {
        text: Delanteros.getRandom() + ', el delantero silencioso.'
    },
    {
        text: 'Gol importante para ' + Medios.getRandom() + '. Tanto por lo colectivo como por lo personal.'
    },
    {
        text: 'Marcó ' + Delanteros.getRandom() + '. One more time.'
    },
    {
        text: 'Segunda mitad fabulosa del *team1*.'
    },
    {
        text: 'Primera derrota de *team1* desde la llegada de Solskjaer.'
    },
    {
        text: 'Doble asistencia de ' + Delanteros.getRandom() + ', vital.'
    },
    {
        text: 'Apareció otra vez el genio ' + Delanteros.getRandom() + ' en eliminatoria europea.'
    },
    {
        text: 'El gol del ' + Delanteros.getRandom() + ' mete al *team2* en la eliminatoria.'
    },
    {
        text: 'Primer golpe de *team1* en la eliminatoria.'
    }
    ];
    
    return   claves[Math.floor(Math.random() * claves.length)].text;
}
