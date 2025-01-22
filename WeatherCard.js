import React, { useState } from 'react'
import axios from 'axios';

 const WeatherCard = () => {
    const[city,setCity]=useState('')
    const [weather,setWeather]=useState(null)



    const APi_key='9298a418c96569f362dd3e659f92404c'

    const fetchWeather=async()=>{
        if(!city.trim()){
            alert('Please enter a city name');
            
            
            try{
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APi_key}`);
            setWeather(response.data);
            console.log(response.data);

        } catch(err){
            alert('city not found')
        


        }
    }
};
  return (
    <div className='app'>
         <h1>Weather App</h1>
        <div className='input-container'>
            <input type="text"
            placeholder='enter city name'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
           />

            <button onClick={fetchWeather}>Search</button>
        
        </div>
        {weather &&<div className='weather-card'>
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <img
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt={weather.weather[0].description}
    />
             <h3>{weather.main.temp}°C</h3>
             <p>Humidity: {weather.main.humidity}%</p>
             <p>Wind: {weather.wind.speed} m/s</p>

        </div>
 }


    </div>
  )
}
export default WeatherCard