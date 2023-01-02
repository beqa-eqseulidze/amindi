import { elements } from "./elements.js";
import {CgetDate,CgetHour,CgetWeekDay,CgetMonth} from "./helper.js"
import { dayOrNIght } from "./dayOrNight.js";


export function renderCurrentWeather(arr){
    
    const weatherDescriptin={
        Clear:'მოწმენდილი',
        Rain:'წვიმა',
        Clouds:'ღრუბლიანი',
    }


   
    const dayTime=dayOrNIght(arr[0].data.sys.sunrise,arr[0].data.sys.sunset,arr[0].data.dt);
    const currentWeatherImageSrc=`./img/${dayTime}/${arr[0].data.weather[0].main}.png`;
    const currentTep=Math.round(arr[0].data.main.temp);

      elements.curentForcast.innerHTML=`
            <h2>${arr[0].data.name}</h2>
        <p class="date"> 
            <span>${CgetWeekDay(arr[0].data.dt)},</span>
            <span>${CgetDate(arr[0].data.dt)} ${CgetMonth(arr[0].data.dt)}</span>
        </p>
        <p class="current-time"></p>        
        <div class="forcast">
            <img src="${currentWeatherImageSrc}"  alt="${arr[0].data.weather[0].description}">
            <p class="degree">${currentTep}<sup>o</sup> </p>
        </div>
        <p class="description">${localStorage.getItem('language')=='GE'? weatherDescriptin[arr[0].data.weather[0].main]:arr[0].data.weather[0].main}</p>
    `
    setInterval(function(){document.querySelector('.current-time').innerText=`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}, 1000)


    for(let i = 0; i < arr[1].data.list.length; i++){
        elements.hourlyFocastList.innerHTML=`<li> ${CgetHour(arr[0].data.dt).asString} საათი <img src="${currentWeatherImageSrc}" width="32" height="32" alt="sun" ><span>${currentTep}<sup>o</sup></span> </li>`
        if(CgetDate(arr[1].data.list[i].dt)===CgetDate(arr[0].data.dt)){
            elements.hourlyFocastList.innerHTML +=`
            <li> ${CgetHour(arr[1].data.list[i].dt).asString} საათი <img src="./img/${dayTime}/${arr[1].data.list[i].weather[0].main}.png" width="32" height="32" alt="${arr[1].data.list[i].weather[0].description}" ><span>${Math.round(arr[1].data.list[i].main.temp)}<sup>o</sup></span> </li>
            `
        }   
    }

elements.btnSeeAll.addEventListener('click',()=>{        
        elements.hourlyFocastList.innerHTML='';
        arr[1].data.list.forEach(el => {           
            if(CgetDate(el.dt)<=CgetDate(arr[0].data.dt)+1){
                elements.hourlyFocastList.innerHTML +=`
                
                 <li> ${CgetHour(el.dt).asString} საათი <img src="./img/${dayTime}/${el.weather[0].main}.png" width="32" height="32" alt="${el.weather[0].description}" ><span>${Math.round(el.main.temp)}<sup>o</sup></span> </li>
                `
            }               
            
        });
       
    })

} 