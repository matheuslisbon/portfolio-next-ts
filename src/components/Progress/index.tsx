import React from "react";
import ProgressDiv from "./styled";
import Image from "next/image";
export const Progress = ({ borderName, skills, imgLink, colorBk, text }) => {
  return (
    <ProgressDiv>
      <div className="perfil">
        <p style={{ borderBottom: `3px solid ${borderName}` }}>{skills}</p>
        <Image src={imgLink} alt="" width={100} height={100} />
      </div>

      <div className="containerProgress">
        <div
          style={{ width: "100%", background: `${colorBk}` }}
          className="progress-bar"
        >
          {skills} / {text}
        </div>
        <div className="ppp"></div>
      </div>
    </ProgressDiv>
  );
};
