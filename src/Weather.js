import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed, 
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            description: response.data.weather[0].description
        });  
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-warning" />
                    </div>
                </div>
            </form>
            <h1>{props.currentCity}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>

            <div className="row mt-4">
                <div className="col-7">
                    <div className="clearfix">
                        <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />

                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="unit">°C</span>                        
                    </div>
                </div>
                <div className="col-5">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    } else {
        const apiKey = "32c86be80fc849ae3b75447b99a90612";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.currentCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

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