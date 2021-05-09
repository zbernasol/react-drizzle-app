import React from "react";
import "./Weather.css";


export default function Weather() {
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
            <h1>Toronto</h1>
            <ul>
                <li>Sunday 02:20pm</li>
                <li>Partly Cloudy</li>
            </ul>

            <div className="row mt-4">
                <div className="col-7">
                    <div className="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Cloudy" className="float-left" />

                            <span className="temperature">6</span>
                            <span className="unit">°C</span>
                           
                    </div>
                </div>
                <div className="col-5">
                    <ul>
                        <li>Precipitation: 17%</li>
                        <li>Humidity: 47%</li>
                        <li>Wind: 11km/h</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}