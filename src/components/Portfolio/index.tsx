import React from "react";
import { Container } from "./styles";
import Image from "next/image";
import logo from "../../../public/git-work.svg";

export const Portfolio = () => {
  return (
    <Container>
      <Image src={logo} width={800} height={800} alt="img" />
      <div>
        <h1>Sobre mim</h1>
        <article>
          Olá! Me chamo{" "}
          <label htmlFor="">
            Matheus Eduardo sou de Recife em Pernambuco,{" "}
          </label>
          comecei nos meus 14 anos a estudar programação... Atualmente estou
          estudando Jest E Migrations no entanto já sei tecnologias como Node,
          React, Express, MongoDb, PostgreSQL, MySQL, Git e GitHub...{" "}
          <label htmlFor="">
            {" "}
            Além de programar tenho outras paixões como jogar Futebol e Jogos
            OnLines...{" "}
          </label>
          Além disso
          <label htmlFor=""> Sou filho da Dr.Cristiane e do Sr.Sidney,</label>
          <label htmlFor=""> Hora outra sou Hokage ! Datebayo,</label> Ou se não
          sou <label htmlFor="">Dom Quixote</label>, Espero que tenha gostado da
          minha pequena apresentação <label htmlFor="">foi um prazer !</label>{" "}
          <span id="contato"></span>
        </article>
      </div>
    </Container>
  );
};
