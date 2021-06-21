import React from "react";
import SkillsDiv from "./styled";
import { Progress } from "../../components/Progress/index";
import Css from "../../../public/css.png";

export const Skills: React.FC = () => {
  return (
    <SkillsDiv>
      <h1>Skills</h1>
      <header>
        <div className="container">
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Frontend</h2>
              <ul>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>React Native(Mobile)</li>
                <li>Jest(Test)</li>
                <li>Styled-Components</li>
                <li>Bootstrap</li>
                <li>React-Redux</li>
                <li>React-Hooks</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="itens">
          <Progress
            text={"AVANÇADO"}
            imgLink={Css}
            colorBk={" linear-gradient(to left, #ff00ff, #fb4a21)"}
            skills="HTML"
            borderName={"#ff00ff"}
          />

          <Progress
            text={"AVANÇADO"}
            imgLink={Css}
            colorBk={"linear-gradient(to left, #ff6731, #ffcd00)"}
            skills={"JAVASCRIPT"}
            borderName={"#ff6731"}
          />

          <Progress
            text={"INTERMEDÍARIO"}
            colorBk={"linear-gradient(to right, #8a2be2 , #ff3a40  )"}
            skills="CSS"
            imgLink={Css}
            borderName={"#8a2be2"}
          />
          <Progress
            text={"INTERMEDÍARIO"}
            colorBk={"linear-gradient(to right, #69ff46, #3a90e5"}
            skills="NODE"
            imgLink={Css}
            borderName={"#69ff46"}
          />

          <Progress
            text={"INTERMEDÍARIO"}
            colorBk={"linear-gradient(to right, #0b36c3 , #7df9ff)"}
            skills="REACT"
            imgLink={Css}
            borderName={"#0b36c3"}
          />
        </div>
        <div className="container two">
          <div className="box">
            <span></span>
            <div className="content">
              <h2>Backend</h2>
              <ul>
                <li>NodeJS</li>
                <li>Express Js</li>
                <li>Jest(Test)</li>
                <li>MySql</li>
                <li>PostgresSql</li>
                <li>MongoDb</li>
                <li>Sequelize Orm</li>
                <li>
                  Templating engines <br /> Handlebars, EJS, Nunjucks...
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div id="sobre"></div>
    </SkillsDiv>
  );
};
