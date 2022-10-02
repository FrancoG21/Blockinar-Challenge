import styled from "styled-components";
import { SplideSlide } from "@splidejs/react-splide";

export const BackCarrousel = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  /* position: relative; */

  @media screen and (max-width: 600px) {
    height: 50vh;
  }
`;

export const TitleCarrousel = styled.h1`
  color: #fff;
  font-size: 30px;
  /* position: absolute; */
  top: 20px;
  left: 400px;

  @media screen and (max-width: 600px) {
    left: 9px;
    font-size: 20px;
    text-align: center;
  }
`;

export const DivTextTop = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextTop = styled.p`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.fontPrimary};
  width: 70%;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  margin-left: 18px;
  margin-right: 18px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 50px;
  position: absolute;
  top: 370px;
  left: 200px;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media screen and (max-width: 600px) {
    font-size: 15px;
    top: 150px;
    left: 24px;
    margin-bottom: 0;
  }
`;

export const CarrouselHome = styled(SplideSlide)`
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 280px;
  }
`;

export const ImageCarrouselHome = styled.img`
  width: 100%;
  height: 500px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 350px;
  }
`;
