import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";

export const BackgroundState = styled.div`
  background-image: url("https://www.revistalimpiezas.es/wp-content/uploads/sites/4/2020/05/camarera-de-piso-900x600.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: center center;
  background-color: #fff;
  height: 84.5vh;
  padding: 2rem;

  @media screen and (max-width: 600px) {
    height: 130vh;
    padding: 2rem;
  }
`;

export const TitleFormEdit = styled.h1`
  text-transform: uppercase;
  color: #fff;
  font-size: 1.5rem;
  padding: 15px;
  cursor: default;
`;

export const DivForm = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

export const FormEdit = styled.form`
  background-color: ${(props) => props.theme.navBar};
  margin: 0 auto;
  width: 80%;
  border-radius: 5px;
  text-align: center;
  padding: 25px;
  height: 450px;
  top: 150px;
  left: 130px;

  @media screen and (max-width: 600px) {
    width: auto;
    height: 890px;
  }
`;

export const LabelEdit = styled.label`
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const InputEdit = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-left: 10px;

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const DivInputState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontSecondary};
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
;
export const DivStateInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.fontSecondary};
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputState = styled.input`
  background-color: ${(props) => props.theme.fontSecondary};
  margin-top: 20px;
  margin: 0;
  margin-left: 10px;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-bottom: 1px;
    margin-top: 5px;
  }
`;

export const ButtonEnviar = styled.button`
  background-color: #fff;
  color: #000;
  border: 1px solid #fff;
  padding: 10px;
  width: 90px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;

  &:hover {
    background-color: ${(props) => props.theme.navBar};
    color: #fff;
  }
`;

export const TextInput = styled.p`
  color: #fff;
  margin-top: 20px;
  margin-left: 5px;
`;

export const NavButtonBack = styled(NavLink)`
  width: 3rem;
  height: 3rem;
`;

export const ButtonBack = styled(IoReturnDownBackSharp)`
  width: 3rem;
  height: 3rem;
  top: 0;
  color: ${(props) => props.theme.backgroundPrimary};

  @media screen and (max-width: 600px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const ErrorText = styled.p`
  color: #ff0000;
  margin: 0;
  font-size: 15px;
  text-align: center;
  margin-left: 30px;
`