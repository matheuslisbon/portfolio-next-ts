import React from "react";

import { Container } from "./styles";
import { VscColorMode } from "react-icons/vsc";
interface Props {
  togleTheme(): void;
  theme?: string;
}
export const NavBar: React.FC<Props> = ({ togleTheme }) => {
  return (
    <Container>
      <div>
        <h1>Matheus Dev</h1>

        <ul>
          <li style={{ cursor: "pointer" }} onClick={togleTheme}>
            Theme
          </li>
          <VscColorMode size={30} cursor="pointer" onClick={togleTheme} />
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#projetos">PORTFÓLIO</a>
          </li>
          <li>
            <a href="#sobre">SOBRE</a>
          </li>
          <li>
            <a href="#contato">CONTATO</a>
          </li>
        </ul>
      </div>
    </Container>
  );
};
