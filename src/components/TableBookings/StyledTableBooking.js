import styled from "styled-components";

export const BackgroundBookings = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  height: 570vh;

  @media screen and (max-width:600px) {
    height: 670vh;
  }
`;

export const TitleBookings = styled.h1`
  color: #000;
  padding: 1.5rem;
  margin: 0;
  margin-left: 50px;
  cursor: default;
`;

export const TableBooking = styled.table`
  background-color: ${(props) => props.theme.backgroundSecondary};
  margin: 0 auto;
  margin-top: 45px;
  justify-content: center;
  text-align: center;
  width: 90%;
  border: 1px solid #000;
  margin-bottom: 50px;
`;

export const ColumnBooking = styled.th`
  color: ${(props) => props.theme.backgroundPrimary};
  text-transform: uppercase;
  border-left: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-right: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-bottom: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-top: 1px solid ${(props) => props.theme.backgroundSecondary};
`;


export const FilesBooking = styled.td`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.backgroundSecondary};
  border-left: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-right: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-bottom: 1px solid ${(props) => props.theme.backgroundSecondary};
`;

export const ButtonEdit = styled.button`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.fontPrimary};
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.fontSecondary};
  }
`;

export const DivAz = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleAz = styled.h4`
  color: ${(props) => props.theme.fontPrimary};
  text-align: center;
  margin-top: 10px;
`;

export const ButtonReset = styled.button`
  background-color: ${(props) => props.theme.backgroundPrimary};
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;
