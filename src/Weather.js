import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
    city: "Kyiv",
    date: "Today",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 55,
    wind: 10,
    temperature: 20
    };

    return (
    <body>
    <div className="container">
        <header>
            <form>
            <input className="search-bar" type="text" placeholder="Enter your city"/>
            <input className="search-button" type="submit" value="OK" />
            <button className="search-button current-button">Current</button>
            </form>
        </header>
        <div className="current">
            <h1 className="current__city">
            Weather in <span>{weatherData.city}</span>
            </h1>
        <div className="row">
            <div className="col-3">
                <h2 className="today">{weatherData.date}</h2>
                <h3 className="current__temperature">
                <span>{weatherData.temperature}</span>
                <span className="units">
                    <a href="/" className="active">°C </a>|<a href="/">°F</a>
                </span>
                </h3>
            <div className="current__description">
                {weatherData.description}
            </div>
            <img src={weatherData.imgUrl} alt="icon" />
            </div>
            <div className="col-3">
            <h3 className="min__temperature">
                min: <span>15</span>
            </h3>
            <h3 className="max__temperature">
                max: <span>25</span>
            </h3>
            <ul>
                <li>
                    Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li>
                    Wind: <span>{weatherData.wind}</span> km/h
                </li>
            </ul>
            </div>
            <div className="col-6"></div>
        </div>
        </div>
        <div className="row forecast"></div>
    </div>
    
    </body>
);
}
