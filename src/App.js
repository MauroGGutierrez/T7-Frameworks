import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./app.css"
import SlideImg from "./components/SlideImg";

const App = () => {
  return (
    <body>
      <div>
        <Header/>
        <Menu/>
        <SlideImg/>
        <br/>
      </div>
    </body>
  )
};

export default App;