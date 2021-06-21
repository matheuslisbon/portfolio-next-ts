import styled from "styled-components";

const ProgressDiv = styled.div`
  width: 280px;
  margin: 0 auto;
  font-weight: bold;
  display: grid;
  font-size: 14px;
  div.perfil {
    padding: 5px;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div.perfil p {
  }
  div.perfil img {
    height: 36px;
  }
  .progress-bar {
    align-self: center;
  }
  .containerProgress {
    height: 15px;
    background-color: #252525;
    position: relative;
    border-radius: 8px;
    margin: 10px;
  }
  .containerProgress .progress-bar {
    position: absolute;
    height: 100%;
    background-color: #0fd439;
    border-radius: 8px;
    text-align: center;
  }
  div.ppp {
    text-align: right;
    margin-right: 10px;
    position: relative;
  }
  .skillsEffect {
    animation: GlobalAnimationReact 1s ease;
    color: white;
  }
`;

export default ProgressDiv;
