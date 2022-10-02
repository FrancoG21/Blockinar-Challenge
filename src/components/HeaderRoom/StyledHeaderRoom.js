import styled from "styled-components";

export const ImagaHeader = styled.div`
    height: 40vh;
    width: 100%;
    background-image: url('https://digital.ihg.com/is/image/ihg/Executive-suite165?fmt=png-alpha');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    @media screen and (max-width: 600px) {
        position: unset;
        width: 100%;
        height: 30vh;
    }
`

export const TiitleFilters = styled.h4`
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 5px;
`

export const BackgroundFilters = styled.div`
    background-color: ${(props) => props.theme.navBar};
    padding: 15px;
    width: 300px;
    border-radius: 5px;
    position: absolute;
    top: 310px;
    left: 550px;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.93);
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.93);
    border: 1px solid ${(props) => props.theme.fontPrimary};

    @media screen and (max-width: 600px) {
        position: unset;
        width: auto;
        margin-left: 10px;
        margin-right: 10px;
        /* margin-top: 20px; */
    }
;
`