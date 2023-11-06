import { Container } from "./styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import DevFinancesImg from "../../styles/assets/gitHubImgs/DevFinances.jpeg";
//import cloneYtbImg from "../../styles/assets/gitHubImgs/cloneYoutubeImg.jpg";
//import mountainImg from "../../styles/assets/gitHubImgs/webMountain.jpeg";
//import covidImg from "../../styles/assets/gitHubImgs/imgSite.png";
//import moveItImg from "../../styles/assets/gitHubImgs/moveIt.jpeg";
//import EcolletaImg from "../../styles/assets/gitHubImgs/nlwEcolleta.png";
import eDiaristasImg from "../../styles/assets/gitHubImgs/e-diaristas.jpeg";
//import happyImg from "../../styles/assets/gitHubImgs/happy.png";
//import letmeask from "../../styles/assets/gitHubImgs/letmeask.jpeg";

import Image from "next/image";

export const Projects: React.FC = () => {
  return (
    <Container id="projetos">
      <header>
        <h1>Projetos</h1>
      </header>

      <section>
        <div>
          <a target="_blanck" href="https://e-diaristas.vercel.app/">
            VISITAR WEBSITE
          </a>

          <Image src={eDiaristasImg} alt="tech" />
          <p>E-diarista - Procure por profissionais </p>
        </div>
        {/* 
        <div>
          <a target="_blanck" href="https://letmeask-f520b.web.app/">
            VISITAR WEBSITE
          </a>

          <Image src={letmeask} alt="tech" />
          <p>Nlw 6 - rocketseat - Perguntas em real-time</p>
        </div>

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
*/}
      </section>
    </Container>
  );
};
