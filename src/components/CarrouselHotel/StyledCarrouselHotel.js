import styled from "styled-components";

export const TitleCarrouselHotel = styled.h1`
  color: ${(props) => props.theme.fontPrimary};
  margin-left: 7px;
  font-size: 25px;
  margin-bottom: 0;

  @media screen and (max-width: 600px) {
    margin: 0;
    text-align: center;
    font-size: 20px;
    margin-top: 50px;
  }  
`;

export const NameCarrouselHotel = styled.h3`
  color: ${(props) => props.theme.fontPrimary};

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

export const ImageHotelCarrousel = styled.img`
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 150px;
  }
`