/* eslint-disable @next/next/no-img-element */
import { Container } from "./styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DevFinancesImg from "../../../public/gitHubImgs/DevFinances.jpeg";
import cloneYtbImg from "../../../public/githubImgs/cloneYoutubeImg.jpg";

import mountainImg from "../../../public/githubImgs/webMountain.jpeg";
import covidImg from "../../../public/githubImgs/imgSite.png";
import moveItImg from "../../../public/githubImgs/moveIt.jpeg";
import EcolletaImg from "../../../public/githubImgs/nlwEcolleta.png";

import happyImg from "../../../public/githubImgs/happy.png";

import Image from "next/image";

export const Projects: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>Projetos</h1>
      </header>
      <section>
        <div>
          <a
            target="_blanck"
            href="https://devfinances-matheus-dev.netlify.app/"
          >
            VISITAR WEBSITE
          </a>
          <Image src={DevFinancesImg} alt="tech" />
          <p>Dev Finances - Projeto de finanças </p>
        </div>

        <div>
          <a target="_blanck" href="https://mountains-matheus-dev.netlify.app/">
            VISITAR WEBSITE
          </a>
          <Image src={mountainImg} alt="tech" />
          <p>The Mountain - Galeria de montanhas</p>
        </div>

        <div>
          <a target="_blanck" href="https://dados-covid-world.netlify.app/">
            VISITAR WEBSITE
          </a>
          <Image src={covidImg} alt="tech" />
          <p>Fluxo Covid - dados mundiais de covid 19</p>
        </div>

        <div>
          <a target="_blanck" href="https://move-it-beige.vercel.app/">
            VISITAR WEBSITE
          </a>
          <Image src={moveItImg} alt="tech" />
          <p>Move it NLW4 - horário de estudo com pomodoro</p>
        </div>

        <div>
          <a
            target="_blanck"
            href="https://github.com/matheuslisbon/clone-youtube"
          >
            VISITAR WEBSITE
          </a>
          <Image src={cloneYtbImg} alt="tech" />
          <p>Youtube - clone youtube</p>
        </div>

        <div>
          <a
            target="_blanck"
            href="https://github.com/matheuslisbon/next-level-week1-E-colleta"
          >
            VISITAR WEBSITE
          </a>
          <Image src={EcolletaImg} alt="tech" />
          <p>Nlw 1 rocketseat - Projeto da nlw 4</p>
        </div>

        <div>
          <a
            target="_blanck"
            href="https://github.com/matheuslisbon/next-level-week-happy"
          >
            VISITAR WEBSITE
          </a>

          <Image src={happyImg} alt="tech" />
          <p>Nlw 3 rocketseat - Projeto da nlw 4</p>
        </div>
      </section>
    </Container>
  );
};
