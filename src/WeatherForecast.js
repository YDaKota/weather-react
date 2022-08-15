import React from "react";
import "./WeatherForecast.css";
import Footer from "./Footer";

export default function WeatherForecast() {
    return (
    <body>
    <div className="container">
        <div className="row forecast">
            <div className="col-2">
                <h5 className="card-title">Monday</h5>
                <img src="https://ssl.gstatic.com/onebox/weather/48/cloudy.png" className="card-img-top" alt="forecast icon" />
                <p className="degrees">25°C</p>
            </div>
            <div className="col-2">
                <h5 className="card-title">Tuesday</h5>
                <img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" className="card-img-top" alt="forecast icon" />
                <p className="degrees">28°C</p>
            </div>
            <div className="col-2">
                <h5 className="card-title">Wednesday</h5>
                <img src="https://ssl.gstatic.com/onebox/weather/48/thunderstorms.png" className="card-img-top" alt="forecast icon" />
                <p className="degrees">21°C</p>
            </div>
            <div className="col-2">
                <h5 className="card-title">Thursday</h5>
                <img src="https://ssl.gstatic.com/onebox/weather/48/thunderstorms.png" className="card-img-top" alt="forecast icon" />
                <p className="degrees">27°C</p>
            </div>
            <div className="col-2">
                <h5 className="card-title">Friday</h5>
                <img src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png" className="card-img-top" alt="forecast icon" />
                <p className="degrees">30°C</p>
            </div>
        </div>
    </div>
    
    </body>
    );
}
<Footer/>