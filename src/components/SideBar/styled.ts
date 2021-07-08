import styled from "styled-components";

const Index = styled.div`
  color: ${(props) => props.theme.color};
  .side-bar {
    position: fixed;
    z-index: 99;
    margin-top: 120px;
    height: 10% !important;
    display: flex;
    flex-direction: column;
    border-right: 5px solid;
    border-top: 5px solid;
    border-bottom: 5px solid;
    border-radius: 0 14px 14px 0;
    border-color: rgba(90, 90, 90, 0.1);
    background: ${(props) => props.theme.background};
    backdrop-filter: saturate(180%) blur(18px);
    transition: 0.8s ease;
  }
  .side-bar p {
    color: ${(props) => props.theme.color};
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }
  .link-nav {
    color: ${(props) => props.theme.color};
    border: 3px solid #303030;
    padding: 10px;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    background: ${(props) => props.theme.background};
    font-weight: bold;
    transition: 0.5s;
  }
  .toggle-menu {
    height: 58px;
    border-top-right-radius: 8rem;
    border-bottom-right-radius: 8rem;
    width: 18px;
    position: absolute;
    outline: none;
    z-index: 1;
    background: ${(props) => props.theme.background};
    border-color: rgba(64, 194, 133, 0.693);
    border-left: 0;
  }
  div.list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div.list p {
    margin: 25px 0;
  }
  .link-nav:hover {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    padding: 15px;
    font-size: 18px;
  }
`;

export default Index;
