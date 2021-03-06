import React, { useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";



export default function Weather(props) {
    const [city, setCity] = useState(props.currentCity);
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed, 
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description
        });  
    }

    function search() {
        const apiKey = "bc8a0c3d5df6a6835105498aac967ac9";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search ();
    }


    function updateCity(event) {
        setCity (event.target.value);
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" required onChange={updateCity}/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="button-search" />
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
    );

    } else {
        search ();
    
        return (
                <Loader
                    type="Puff"
                    color="#c66b3d"
                    height={100}
                    width={100}
                />
            );
    }

}