import styled from "styled-components";

export const BackgroundAbout = styled.div`
  background-color: ${(props) => props.theme.BackgroundPrimary};
  height: 60vh;
  padding: 10px;
`;

export const TitlteAbout = styled.h1`
  color: ${(props) => props.theme.fontPrimary};
  margin-left: 18px;
  font-size: 25px;

  @media screen and (max-width: 600px) {
    text-align: center;
    font-size: 20px;
    margin-top: 50px;
    margin-left: 0;
  }
`;

export const DivGridAbout = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
`;

export const DivCardAbout = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardAbout = styled.div`
  background-color: ${(props) => props.theme.BackgroundPrimary};
  border-radius: 10px;
  padding: 25px;
  width: 240px;
  height: 330px;
  border: 1px solid ${(props) => props.theme.fontPrimary};

  &:hover {
    box-shadow: 0px 1px 5px 6px rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0px 1px 5px 6px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 1px 5px 6px rgba(0, 0, 0, 0.19);
  }

  @media screen and (max-width: 600px) {
    width: auto;
  }
`;

export const TitleAbout = styled.h4`
  color: ${(props) => props.theme.fontPrimary};
  font-size: 17px;
`;

export const TextAbout = styled.p`
  color: ${(props) => props.theme.fontPrimary};
  font-size: 15px;
`;
