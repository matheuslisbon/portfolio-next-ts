import React from "react";
import { NavBar } from "../components/NavBar";
import { Portfolio } from "../components/Portfolio";
import { Introduction } from "../components/Home";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <React.Fragment>
      <Introduction />
      <Portfolio />
      <Skills />
      <Projects />
    </React.Fragment>
  );
}
