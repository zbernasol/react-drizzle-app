import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div>
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>

            <div className="row mt-4">
                <div className="col-7">
                    <div className="clearfix">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} size={64}/>
                        </div>
                        <div className="float-left">
                            <WeatherTemperature celcius={props.data.temperature} />
                        </div>                              
                    </div>
                </div>
                <div className="col-5">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>     
    );
}