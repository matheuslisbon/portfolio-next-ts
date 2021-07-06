import React from "react";

import { Portfolio } from "../components/Portfolio";
import { Introduction } from "../components/Home";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { NavBar } from "../components/NavBar";

interface Props {
  togleTheme(): void;
  theme: string;
}

export default function Home({ theme, togleTheme }: Props) {
  return (
    <React.Fragment>
      <NavBar togleTheme={togleTheme} theme={theme} />
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

      <div data-aos="fade-in" data-aos-duration="2800">
        <Contact />
      </div>
    </React.Fragment>
  );
}
