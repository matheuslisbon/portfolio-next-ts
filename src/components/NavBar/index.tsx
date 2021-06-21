import React from "react";
import { Container } from "./styles";

export const NavBar: React.FC = () => {
  return (
    <Container>
      <h1>Matheus Dev</h1>

      <ul>
        <li>Home</li>
        <li>Portfolio</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </Container>
  );
};
