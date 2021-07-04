import styled from "styled-components";
import logo from "../../public/logoMath.png.png";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 6vw;
  margin: 0 auto;

  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: saturate(400%) blur(40px);

  ul {
    display: flex;
    li {
      padding: 0 14px;
    }
  }
`;
