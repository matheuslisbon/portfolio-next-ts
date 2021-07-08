import { Container, SubContainer } from "./styled";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import people from "../../styles/assets/people.svg";
import Image from "next/image";

export const Contact: React.FC = () => {
  return (
    <Container id="contato">
      <h1 className="contact">Contato</h1>
      <SubContainer>
        <div>
          <Image className="people" src={people} width={300} alt="" />
        </div>

        <section>
          <h3>Matheus - © Copyright 2021.</h3>
          <div className="icons">
            <FaLinkedin size={40} />
            <FaFacebookSquare size={40} />
            <FaInstagramSquare size={40} />
          </div>
          <div>
            <p>Site criado com carinho por mim</p>
            <p>espero que você tenha gostado !</p>
          </div>
        </section>
      </SubContainer>
    </Container>
  );
};
