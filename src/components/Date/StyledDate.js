import styled from "styled-components";

export const DivDate = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

export const InputDate = styled.input`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 5px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  border: 1px solid #000;

  @media screen and (max-width:600px) {
    width: 180px;
  }
`;

export const ButtonDate = styled.button`
  background-color: #fff;
  color: #000;
  border: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #000;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
