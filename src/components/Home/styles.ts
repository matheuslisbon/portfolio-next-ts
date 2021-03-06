import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 100vh;

  h1 {
    font-size: 82px;
    margin-top: -150px;
  }
  p {
    font-size: 52px;
    margin-top: 26px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    div.title {
      padding: 60px 0;
    }
    h1 {
      font-size: 46px;
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 20px;
    }
  }
`;
