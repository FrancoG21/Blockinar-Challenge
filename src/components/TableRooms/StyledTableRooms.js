import styled from 'styled-components';
import { CSVLink } from "react-csv";

export const BackgroundRooms = styled.div`
    background-color: ${(props) => props.theme.backgroundPrimary};
    height: 350vh;

    @media screen and (max-width: 600px) {
        height: 220vh;
    }
`

export const TitleRooms = styled.h1`
    color: ${(props) => props.theme.fontSecondary};
    padding: 1.5rem;
    margin: 0;
    margin-left: 50px;
    cursor: default;
`

export const DivInfo = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    margin-top: 40px;
`

export const DisplayOcupado = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
`

export const DivOcupado = styled.div`
    background-color: #00cc44;
    height: 15px;
    width: 15px;
    border: 1px solid #000;
`

export const DivDesocupado = styled.div`
    background-color: #e60000;
    height: 15px;
    width: 15px;
    border: 1px solid #000;
`

export const Ocupado = styled.p`
    color: #00cc44;
    margin-left: 5px;
`

export const Desocupado = styled.p`
    color: #e60000;
    margin-left: 5px;
`

export const DivExcel = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`

export const ExcelButton = styled(CSVLink)`
    background-color: #00cc44;
    color: #000;
    border: 1px solid #000;
    border-radius: 5px;
    justify-content: center;
    padding: 8px;
    text-decoration: none; 
    text-transform: uppercase;
`

export const Table = styled.table`
    background-color: ${(props) => props.theme.fontPrimary};
    margin: 0 auto;
    margin-top: 5px;
    justify-content: center;
    text-align: center;
    width: 90%;
    border: 1px solid #000;

    @media screen and (max-width: 600px) {
        width: auto;
        margin-left: 10px;
        margin-right: 10px;
    }
`

export const AllFiles = styled.tr`
    background-color: ${props => (props.name === 1 ? '#e60000' : '#00cc44')};
`

export const AllHeadFiles = styled.tr`
    background-color: ${(props) => props.theme.fontPrimary};
`

export const ColumnTitle = styled.th`
    background-color: ${(props) => props.theme.backgroundPrimary};
    color: ${(props) => props.theme.fontPrimary};
    text-transform: uppercase;
`
   
export const FilesTitle = styled.td`
    color: #000;
`
