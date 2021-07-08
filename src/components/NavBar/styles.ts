import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.nav};
  backdrop-filter: saturate(400%) blur(40px);
  position: sticky;
  top: 0;
  z-index: 9999;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color};
    }
    ul {
      display: flex;
      align-items: center;
      li {
        padding: 0 14px;
      }
    }
  }
  @media (max-width: 900px) {
    div {
      ul {
        display: none;
      }
    }
  }
`;
