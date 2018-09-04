/** @flow */
import { delanteros } from './Delanteros';
import { finales } from './Finales';
import { medios } from './Medios'

export const getRandomFinal = () =>
  finales[Math.floor(Math.random() * finales.length)];

export const getRandomClave = (arr:Array<Clave>) =>
  arr[Math.floor(Math.random() * arr.length)].text;

export const getRandomForward = () =>
  delanteros[Math.floor(Math.random() * delanteros.length)].text;
  
export const getRandomMid = () =>
  medios[Math.floor(Math.random() * medios.length)].text;
  

  

