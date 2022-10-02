import styled from "styled-components";

export const BackgroundHome = styled.div`
  height: 255vh;
  background-color: ${(props) => props.theme.backgroundPrimary};

  @media screen and (max-width: 600px) {
    height: 470vh;
  }
`;

export const DivHome = styled.div`
  margin-left: 50px;
  margin-right: 50px;

  @media screen and (max-width: 600px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
