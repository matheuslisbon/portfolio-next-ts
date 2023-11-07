import { Container, SubContainer } from "./styled";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Link from "next/link";
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
          <h3>Matheus - © Copyright 2023</h3>
          <div className="info-contact">
            <p>Email: matheuslisbonweb@gmail.com</p>
            <p>Telefone: (81) 98717-0711</p>
          </div>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/matheus-fullstack-developer/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={40} className="icon-img" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009610324999"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare size={40} className="icon-img" />
            </a>
            <a
              href="https://www.instagram.com/matheus_lisbon/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare size={40} className="icon-img" />
            </a>
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
