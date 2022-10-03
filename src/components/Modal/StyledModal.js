import styled from 'styled-components';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.backgroundPrimary};;
    /* background: #fff;
    height: 600px;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 0; */
`

export const BackModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #000;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;

    @media screen and (max-width: 600px) {
        width: 90%;
        margin-right: 80px;
    }
    /* background-color: #000;
    padding: 2rem;
    border-radius: 15px;
    margin-top: 20px; */
`

export const TitleForm = styled.h1`
    color: #fff;
    text-align: center;
    text-transform: uppercase;
`

export const DivModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Subtitle = styled.h3`
    color: #fff;
`

export const Text = styled.label`
    color: #fff;
    align-items: center;
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

export const ButtonCancel = styled.button`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        background-color: red;
        color: #fff;
    }
`

export const ButtonAceptar = styled.button`
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: blue;
        color: #fff;
    }
`