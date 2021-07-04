import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 6vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 78px;
    padding-bottom: 36px;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 28px;

    div {
      display: flex;
      position: relative;
      flex-direction: column;

      box-shadow: 0 0 10px 0px #212121;
      &:hover {
        a {
          display: flex;
        }
      }

      a {
        position: absolute;
        display: none;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: saturate(180%) blur(6px);
        cursor: pointer;
        color: white;

        font-size: 14px;
      }

      img {
        width: 100%;
        height: 100%;
      }
      p {
        padding: 10px 7px;
      }
    }
  }
`;
