import React from "react";

import { Portfolio } from "../components/Portfolio";
import { Introduction } from "../components/Home";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { NavBar } from "../components/NavBar";
import SideBar from "../components/SideBar";

interface Props {
  togleTheme(): void;
  theme: string;
}

export default function Home({ theme, togleTheme }: Props) {
  return (
    <React.Fragment>
      <NavBar togleTheme={togleTheme} theme={theme} />
      <SideBar togleTheme={togleTheme} />
      <Introduction />

      <Portfolio />

      <Skills />

      <Projects />

      <Contact />
    </React.Fragment>
  );
}
