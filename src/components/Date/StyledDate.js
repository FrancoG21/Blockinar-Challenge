import styled from "styled-components";

export const DivDate = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

export const InputDate = styled.input`
  display: flex;
  justify-content: center;
  padding: 5px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  border: 1px solid #000;
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
