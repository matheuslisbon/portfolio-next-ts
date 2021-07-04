/* eslint-disable @next/next/no-img-element */
import { Container } from "./styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          <img src="/githubImgs/DevFinances.jpeg" alt="" />
          <p>Dev Finances - Projeto de finanças </p>
        </div>

        <div>
          <a target="_blanck" href="https://mountains-matheus-dev.netlify.app/">
            VISITAR WEBSITE
          </a>
          <img src="/githubImgs/webMountain.jpeg" alt="" />
          <p>The Mountain - Galeria de montanhas</p>
        </div>

        <div>
          <a target="_blanck" href="https://dados-covid-world.netlify.app/">
            VISITAR WEBSITE
          </a>
          <img src="/githubImgs/imgSite.PNG" alt="" />
          <p>Fluxo Covid - dados mundiais de covid 19</p>
        </div>

        <div>
          <a target="_blanck" href="https://move-it-beige.vercel.app/">
            VISITAR WEBSITE
          </a>
          <img src="/githubImgs/moveIt.jpeg" alt="" />
          <p>Move it NLW4 - horário de estudo com pomodoro</p>
        </div>

        <div>
          <a
            target="_blanck"
            href="https://github.com/matheuslisbon/clone-youtube"
          >
            VISITAR WEBSITE
          </a>
          <img src="/githubImgs/cloneYoutubeImg.jpg" alt="" />
          <p>Youtube - clone youtube</p>
        </div>

        <div>
          <a
            target="_blanck"
            href="https://github.com/matheuslisbon/next-level-week1-E-colleta"
          >
            VISITAR WEBSITE
          </a>
          <img src="/githubImgs/nlwEcolleta.png" alt="" />
          <p>Nlw 1 rocketseat - Projeto da nlw 4</p>
        </div>

        <div>
          <a
            target="_blanck"
            href="https://github.com/matheuslisbon/next-level-week-happy"
          >
            VISITAR WEBSITE
          </a>

          <img src="/githubImgs/happy.png" alt="" />
          <p>Nlw 3 rocketseat - Projeto da nlw 4</p>
        </div>
      </section>
    </Container>
  );
};
