import { dropdown } from './dropdown.js';
import { getLocation } from "./getLocation.js";
import { getWeatherData } from './getWeatherData.js';
import { CgetDate, CgetHour } from './helper.js';
import { renderCurrentWeather } from './renderCurrentWeather.js';
import {language} from './language.js'

if(!sessionStorage.getItem("lat")) getLocation();
dropdown();
let data= await getWeatherData([sessionStorage.getItem("lat"), sessionStorage.getItem("lon")]);
console.log(data);
language();
renderCurrentWeather(data);
console.log(new Date().getTime()/1000);
console.log(new Date(1672617600*1000));



// function getweather(){

//     // https://pro.openweathermap.org/data/2.5/forecast/climate?lat=35&lon=139&appid={API key}
// }
// // Want to use async/await? Add the `async` keyword to your outer function/method.

// // const {default:axios} = require('axios');
// async function getWeather() {
//     try {
//       const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=cac2ebf92ad435b6d272c205aaf5190e');
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getWeather();