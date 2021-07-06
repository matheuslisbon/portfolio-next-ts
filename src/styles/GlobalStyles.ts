import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;

    color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};

  background-image: url("${(props) => props.theme.backUrl}");

  background-size: 100% 180%;
  background-attachment: fixed;
}
@media (max-width: 900px) {
  body {
    background-size: 400% 150%;
  }
}

li {
  list-style: none;
}
h1,
h2,
h3,
p {
  margin: 0;
}

::-webkit-scrollbar {
  width: 8px;
  height: 10px;
  border-radius: 16px;
}
::-webkit-scrollbar-track-piece {
  background-color: #050505;
}
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background: #151515;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: #000;
  border-radius: 3px;
}`;
