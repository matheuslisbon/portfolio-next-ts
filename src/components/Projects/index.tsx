/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import { Container } from "./styled";
import Image from "next/image";
import allImage from "../../../public/react.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Projects = () => {
  return (
    <Container>
      <header>
        <h1>Projetos</h1>
      </header>
      <div>
        <Carousel autoPlay infiniteLoop showStatus={false}>
          <div>
            <img
              alt=""
              src="https://matheus-portfolio.netlify.app/static/media/DevFinances.ba8da791.jpeg"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img
              alt=""
              src="https://matheus-portfolio.netlify.app/static/media/webMountain.00aaa452.jpeg"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              alt=""
              src="https://matheus-portfolio.netlify.app/static/media/moveIt.12b04be7.jpeg"
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              alt=""
              src="https://portfolio-matheus-developer.netlify.app/static/media/imgSite.563030d3.PNG"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </Container>
  );
};
