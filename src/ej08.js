import axios from "axios";
import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/wrapper.js'

let respuesta1 = await OMDBSearchByPage('cars', 1);
console.log('Respuesta 1', respuesta1);

let respuesta2 = await OMDBSearchComplete('cars');
console.log('Respuesta 2', respuesta2);

let respuesta3 = await OMDBGetByImdbID("tt0317219");
console.log('Respuesta 3', respuesta3);