import styled from "styled-components";

export const BackgroundForm = styled.div`
  background-image: url("https://www.revistalimpiezas.es/wp-content/uploads/sites/4/2020/05/camarera-de-piso-900x600.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: center center;
  background-color: #fff;
  height: 72.5vh;
  padding: 5rem;

  @media screen and (max-width: 600px) {
    height: 130vh;
    padding: 2rem;
  }
`;

export const FormStyle = styled.form`
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

export const FormTitle = styled.legend`
  text-transform: uppercase;
  color: #fff;
  font-size: 1.5rem;
  padding: 15px;
  cursor: default;
`;

export const Campo = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const FormLabel = styled.label`
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const DivInput = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 190px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    width: auto;
  }
`;

export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ErrorText = styled.p`
  color: #ff0000;
  margin: 0;
  font-size: 15px;
  text-align: center;
  margin-left: 30px;

  @media screen and (max-width: 600px) {
    text-align: center;
    margin-left: 0;
  }
`;

export const DivButtonSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonSubmit = styled.button`
  padding: 10px;
  width: 90px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 2px;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
