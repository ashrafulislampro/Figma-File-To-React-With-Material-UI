import React from "react";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";
import "./App.css";
import Consulting from "./Pages/Consulting/Consulting.js";
import Podiatry from "./Pages/Podiatry/Podiatry.js";
import Nutrition from "./Pages/Nutrition/Nutrition.js";
import Marketing from "./Pages/Marketing/Marketing.js";
import Physiotherapy from "./Pages/Physiotherapy/Physiotherapy";
import Footer from "./Pages/Footer/Footer.js";
function App() {
  return (
    <div className="App">
      <Home />
      <Service />
      <Consulting />
      <Podiatry />
      <Nutrition />
      <Marketing />
      <Physiotherapy />
      <Footer />
    </div>
  );
}

export default App;
