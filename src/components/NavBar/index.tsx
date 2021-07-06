import React from "react";

import { Container } from "./styles";

interface Props {
  togleTheme(): void;
  theme: string;
}
export const NavBar: React.FC<Props> = ({ togleTheme, theme }) => {
  return (
    <Container>
      <div>
        <h1>Matheus Dev</h1>

        <ul>
          <li style={{ cursor: "pointer" }} onClick={togleTheme}>
            Theme
          </li>

          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
        </ul>
      </div>
    </Container>
  );
};
