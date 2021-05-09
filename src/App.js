import React from "react";
import Weather from "./Weather";
import './App.css';



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Drizzle</h1>
        <Weather currentCity="Toronto"/>
        <footer>
          
          <a href="https://github.com/zbernasol/react-drizzle-app" target="_blank" >
            Open-source
          </a> code by <a href="https://www.linkedin.com/in/zian-angelica-bernasol-6a190a113/" target="_blank">Zian Bernasol</a>
        </footer>
      </div>
    </div>
  );
}


