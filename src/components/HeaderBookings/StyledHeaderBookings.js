import styled from "styled-components";

export const ImageBookings = styled.img`
  height: 60vh;
  width: 100%;
  background-image: url("https://www.ceupe.com/images/easyblog_articles/2751/Actividades-del-servicio-de-las-habitaciones-de-los-hoteles.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  @media screen and (max-width: 600px) {
    position: unset;
    width: 100%;
    height: 30vh;
  }
`;

export const TitleOrders = styled.h4`
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 5px;
`;

export const DivOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundOrders = styled.div`
  background-color: ${(props) => props.theme.navBar};
  padding: 15px;
  width: 500px;
  height: 70px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.backgroundSecondary};
  position: absolute;
  top: 410px;
  left: 450px;
  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.93);
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.93);

  @media screen and (max-width: 600px) {
    position: unset;
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
  }
`

export const ButtonReset = styled.button`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.fontPrimary};
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.backgroundSecondary};
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.fontSecondary};
  }

  @media screen and (max-width:600px) {
    margin-right: 5px;
  }

`;
