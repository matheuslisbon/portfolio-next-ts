import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  font-size: 22px;
  div {
    margin-top: 50px;
    width: 100%;
  }

  h1 {
    font-size: 58px;
    margin-bottom: 40px;
    margin-top: 100px;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    font-size: 18px;
    h1 {
      font-size: 54px;
      margin: 0;
    }
  }
`;
