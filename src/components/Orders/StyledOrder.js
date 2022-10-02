import styled from "styled-components";

export const DivSelectOrder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`

export const SelectOrder = styled.select`
    background-color: ${(props) => props.theme.backgroundPrimary};
    color: ${(props) => props.theme.fontPrimary};
    border-radius: 3px;
    padding: 3px;
    text-align: left;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
`