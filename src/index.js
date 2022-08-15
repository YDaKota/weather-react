import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <WeatherForecast />
      <Footer/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
