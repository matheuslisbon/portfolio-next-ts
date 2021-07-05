import React from "react";

import { Portfolio } from "../components/Portfolio";
import { Introduction } from "../components/Home";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <React.Fragment>
      <div data-aos="fade-in" data-aos-duration="2000">
        <Introduction />
      </div>

      <div data-aos="fade-in" data-aos-duration="2800">
        <Portfolio />
      </div>

      <div data-aos="fade-in" data-aos-duration="2800">
        <Skills />
      </div>
      <div data-aos="fade-in" data-aos-duration="2800">
        <Projects />
      </div>
    </React.Fragment>
  );
}
