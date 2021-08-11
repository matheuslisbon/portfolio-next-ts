import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
  h1.contact {
    font-size: 68px;
    margin-bottom: 20px;
  }
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 38px;
  align-items: center;
  .icons {
    margin: 20px 0;
    .icon-img {
      color: ${(props) => props.theme.color};
    }
  }
  .info-contact {
    margin-top: 14px;
    p {
      font-size: 14px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    font-size: 22px;
  }
`;
