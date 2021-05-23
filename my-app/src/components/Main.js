import React from "react";
import "../css/Main.css";
import Intro from "./Intro";
import Gallery from"./Gallery";
import Blog from "./Blog";
import Contacts from "./Contacts";

function Main() {
  return (
    <main className="Main">
      <Intro />
      <Gallery />
      <Blog />
      <Contacts />
    </main>
  );
}

export default Main;