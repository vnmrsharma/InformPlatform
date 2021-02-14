import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as  Router, Route, Switch, Link, Redirect} from "react-router-dom";

const App = () => {
  
  const cities = [
    {cityname: "Lone Pine, CA, USA", climate: "Earthquake warning!😬", health: "8,765 new COVID-19 Cases", safe: "no"},
    {cityname: "Fukashima, Japan", climate: "Earthquake warning!😬", health: "1,1318 new COVID-19 Cases", safe: "no"},
    {cityname: "Izmir, Turkey", climate: "Tornado warning!🌪", health: "7,706 new COVID-19 Cases", safe: "no"},
    {cityname: "Northern Texas, USA", climate: "Snowstorm❄️", health: "9,211 new COVID-19 Cases", safe: "no"}
  ]
  const renderCity = (cities, index) => {

    return(
      <tr key = {cities, index}>
        <td>{cities.cityname}</td>
        <td>{cities.climate}</td>
        <td>{cities.health}</td>
        <td>{cities.safe}</td>
      </tr>

    )
}


  return (
    <div className="App">
      <div class="container">
      <h2> InformPlatform </h2>
      <div class="select-box">
        <div class="options-container">
          <div class="option">
            <input
              type="city"
              class="city"
              id="California"
              name="Cities"
            />
            <label for="California">California</label>
          </div>

          <div class="option">
            <input type="city" class="city" id="Texas" name="Cities" />
            <label for="Texas">Texas</label>
          </div>

          <div class="option">
            <input type="city" class="city" id="Minnesota" name="Cities" />
            <label for="Minnesota">Minnesota</label>
          </div>
        </div>

      
        <div class="selected">
          Select a Location
        </div>

        <div class="search-box">
          <input type="text" placeholder="Search up the location of your choice!" />
        </div>
      </div>
      
    </div>
    

<ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Location Name🌎 </th>
      <th>Climate🌧</th>
      <th>Health😷</th>
      <th>Is it safe?❌/✅</th>
    </tr>
  </thead>
  <tbody>
    {cities.map(renderCity)}
  </tbody>
</ReactBootStrap.Table>  
</div>


  );



}

export default App;