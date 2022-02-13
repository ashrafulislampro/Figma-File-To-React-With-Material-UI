import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "./../Header/Header";
import "./Home.css";
const Home = () => {
  return (
    <section className="home_container">
      <Navbar />
      <div className="header_container_role">
        <Header />
      </div>
    </section>
  );
};
export default Home;
