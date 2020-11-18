import styled from 'styled-components'

export const SettingsPageContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background: #EFE9E1;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 30px;
`

export const CrudBox = styled.div`

    width: 80%;
    height: 80%;

    border-radius: 8px;
    background: #F9F9F9;
    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);

    padding: 30px;
`

export const UserCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50px;

    padding: 0 10px;
    margin-bottom: 30px;

    border-radius: 8px;
    background: #F9F9F9;
    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);
`

export const Img = styled.img`

    width: 48px;
    height: 48px;

    border-radius: 50%;
    border: 3px solid #F0F0F5;

    margin-top: -36px; 
`

export const Icon = styled.img`
`

export const ValueHeader = styled.div`
    font-size: 18px;
    color: #2F2E41;

    margin-left: 30px;
    margin-right: 10px;
`

export const ValueField = styled.div`
    font-size: 18px;
    opacity: 0.7;
`

export const Button = styled.button`
    background: transparent;
    border: none;
    padding: 0 10px;
`