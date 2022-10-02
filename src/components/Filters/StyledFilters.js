import styled from 'styled-components';

export const CenterSelect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Select = styled.select`
    background-color: ${(props) => props.theme.backgroundPrimary};
    color: ${(props) => props.theme.fontPrimary};
    border-radius: 3px;
    padding: 3px;
    text-align: left;
    text-transform: uppercase;
    cursor: pointer;
`