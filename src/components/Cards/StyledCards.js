import styled from "styled-components";

export const DivGrid = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  padding: 2rem;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  text-align: center;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    margin: 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DivCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  border-radius: 5px;
  width: 350px;
  height: 200px;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 220px;
    margin: 0;
  }

  /* &:hover {
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.93);
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.93);
  } */
`;

export const ImageSecurity = styled.img`
  width: 4rem;
  margin-top: 10px;
`;

export const DivContent = styled.div`
  padding: 20px;

  @media screen and (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

export const TitleCard = styled.h4`
  color: ${props => props.theme.fontPrimary};
  font-size: 20px;
  margin: 0;
`;

export const TextCard = styled.p`
  color: ${props => props.theme.fontPrimary};
  font-size: 15px;
  margin-bottom: 10px;
`;
