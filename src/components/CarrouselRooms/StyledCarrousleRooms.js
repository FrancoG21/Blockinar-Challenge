import styled from "styled-components";

export const ImageCarrouselRoom = styled.img`
    width: 100%;
    height: 400px;

    @media screen and (max-width:600px) {
        width: 100%;
        height: 150px;
    }
`

export const TitlteCarrouselRoom = styled.h3`
    font-size: 20px;
    color: ${(props) => props.theme.fontPrimary};
`