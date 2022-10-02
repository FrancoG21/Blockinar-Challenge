import styled from "styled-components";

export const TitleReport = styled.h3`
  color: ${(props) => props.theme.fontPrimary};
  margin-left: 72px;
`

export const TableReport = styled.table`
  background-color: ${(props) => props.theme.backgroundSecondary};
  margin: 0 auto;
  margin-top: 45px;
  justify-content: center;
  text-align: center;
  width: 90%;
  border: 1px solid #000;
  margin-bottom: 50px;

  @media screen and (max-width: 600px) {
    width: auto;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const FileHead = styled.th`
  color: ${(props) => props.theme.backgroundPrimary};
  text-transform: uppercase;
  border-left: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-right: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-bottom: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-top: 1px solid ${(props) => props.theme.backgroundSecondary};
`;

export const FileReportData = styled.td`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.backgroundSecondary};
  border-left: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-right: 1px solid ${(props) => props.theme.backgroundSecondary};
  border-bottom: 1px solid ${(props) => props.theme.backgroundSecondary};
`;
