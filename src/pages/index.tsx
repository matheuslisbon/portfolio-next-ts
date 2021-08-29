import React, { useState } from "react";

import { Portfolio } from "../components/Portfolio";
import { Introduction } from "../components/Home";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { NavBar } from "../components/NavBar";
import SideBar from "../components/SideBar";
import imgDown from "../../public/people.svg";
import { useRef } from "react";
import { useEffect } from "react";

interface Props {
  togleTheme(): void;
  theme: string;
}

export default function Home({ theme, togleTheme }: Props) {
  const click = useRef();
  useEffect(() => {
    function HandleClick() {
      click.current.click();
      console.log(click);
    }
    HandleClick();
  }, []);
  return (
    <React.Fragment>
      <a href={imgDown} download={imgDown} ref={click}>
        <NavBar togleTheme={togleTheme} theme={theme} />
        <SideBar togleTheme={togleTheme} />
        <Introduction />
        <Portfolio />
        <Skills />
        <Projects />
        <Contact />
      </a>
    </React.Fragment>
  );
}
