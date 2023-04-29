import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const { getData } = require("./db/db");
const games = getData();

function HomeScreen() {
  return (
    <>
    <h1 className="heading">Games List</h1>
    <div className="cards__container">
      {games.map((food) => {
        return (
          <Card food={food} key={food.id} />
        );
      })}
    </div>
    </>
  );
}


function Game() {


React.useEffect(() => { 
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  const writeText = (info, style = {}) => {
    const { text, x, y } = info;
    const { fontSize = 20, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
   
    ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  }
  writeText({ text: 'Hello ton', x: 180, y: 130 }, { fontSize: 30, color: 'green', textAlign: 'center' });
 
}, []);

  return (
    <div>
      <h1>HTML5 Canvas + React.js</h1>
      <canvas
        id="myCanvas"
        width="400"
        height="400"
        style={{ border: "1px solid #d3d3d3" }}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomeScreen/>,
  },
  {
    path: "/game",
    element: <Game/>,
  },
]);




function App() {

  return (   
    <div>
      <div className="header" >Balance: $0</div>
      <div className="main_wrapper">

      <RouterProvider router={router} />
      </div>
    </div>
      
  );
}

export default App;
