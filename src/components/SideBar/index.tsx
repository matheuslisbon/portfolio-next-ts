import React from "react";
import Index from "./styled";
import { VscColorMode } from "react-icons/vsc";
interface Props {
  togleTheme(): void;
  theme?: string;
  width?: string | number;
  height?: string | number;
}

export default function Sidebar({
  width = 120,
  height = "60vh",
  togleTheme,
  theme,
}: Props) {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  return (
    <Index>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        >
          <p
            style={{
              transform: "rotate(90deg)",
              marginTop: "-22px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            menu
          </p>
        </button>
        <div className="content">
          <div className="list">
            <p>
              {" "}
              <a href="#portfolio" className="link-nav">
                Pórtfolio
              </a>
            </p>
            <p>
              {" "}
              <a href="#skills" className="link-nav">
                Skills
              </a>
            </p>
            <p>
              {" "}
              <a href="#sobre" className="link-nav">
                Sobre
              </a>
            </p>
            <p>
              {" "}
              <a href="#contato" className="link-nav">
                Contato
              </a>
            </p>

            <li style={{ cursor: "pointer" }} onClick={togleTheme}>
              Theme
            </li>
            <VscColorMode size={30} cursor="pointer" onClick={togleTheme} />
          </div>
        </div>
      </div>
    </Index>
  );
}
