import React from "react";
import { NavBar } from "../components/NavBar";
import { Portfolio } from "../components/Portfolio";
import { Introduction } from "../components/Home";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
export default function Home() {
  return (
    <React.Fragment>
      <div data-aos="fade-in" data-aos-duration="2000">
        <Introduction />
      </div>

      <div data-aos="fade-in" data-aos-duration="2000">
        <Portfolio />
      </div>

      <div data-aos="fade-in" data-aos-duration="2000">
        <Skills />
      </div>
      <div data-aos="fade-in" data-aos-duration="2000">
        <Projects />
      </div>
    </React.Fragment>
  );
}
