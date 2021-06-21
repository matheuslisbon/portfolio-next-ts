import React from "react";
import { Container } from "./styles";
import Image from "next/image";
import logo from "../../../public/people.svg";
export const Introduction: React.FC = () => {
  return (
    <Container>
      <div className="title">
        <h1>
          Olá, <br /> Sou Matheus
        </h1>
        <p>FullStack Developer</p>
      </div>
      <Image
        src={logo}
        width={470}
        height={470}
        objectFit="contain"
        alt="img"
      />
    </Container>
  );
};
