import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {FaBed} from 'react-icons/fa';
import {TbListCheck} from 'react-icons/tb';
import {RiFileList3Fill} from 'react-icons/ri';

export const BackgroundService = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

export const TitleServices = styled.h3`
  color: ${(props) => props.theme.fontPrimary};
  font-size: 25px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0;

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`

export const DivGridService = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  column-gap: 20px;
  margin-bottom: 40px;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
`;

export const DivFlexService = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardService = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  border-radius: 5px;
  padding: 20px;
  width: 280px;
  height: 135px;
  border: 1px solid ${(props) => props.theme.fontPrimary};

  &:hover {
    box-shadow: 0px 1px 5px 6px rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0px 1px 5px 6px rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0px 1px 5px 6px rgba(0, 0, 0, 0.19);
  }

  @media screen and (max-width: 600px) {
    width: auto;
  }
`;

export const DivFlex = styled.div`
  color: ${(props) => props.theme.fontPrimary};
  display: flex;
  align-items: center;
`;

export const IconBed = styled(FaBed)`
  color: ${(props) => props.theme.fontPrimary};
  width: 2rem;
  height: 2rem;
`;

export const IconList = styled(TbListCheck)`
  color: ${(props) => props.theme.fontPrimary};
  width: 2rem;
  height: 2rem;
`;

export const IconForm = styled(RiFileList3Fill)`
  color: ${(props) => props.theme.fontPrimary};
  width: 2rem;
  height: 2rem;
`;

export const NavTitle = styled(NavLink)`
  text-decoration: none;
`;

export const TitleService = styled.h4`
  color: ${(props) => props.theme.fontPrimary};
  font-size: 18px;
  margin-left: 5px;
`;

export const TextService = styled.p`
  color: ${(props) => props.theme.fontPrimary};
  font-size: 15px;
  margin-top: 0;
`;
