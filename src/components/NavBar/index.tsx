import React from "react";
import { Container } from "./styles";

export const NavBar: React.FC = () => {
  return (
    <Container>
      <h1>Matheus Dev</h1>

      <ul>
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li>SOBRE</li>
        <li>CONTATO</li>
      </ul>
    </Container>
  );
};
