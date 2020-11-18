import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-grow: 1;

    width: 100%;
`

export const HeaderContent = styled.div`
    width: 100%;
    height: 76px;
    background: #F9F9F9;
    border-radius: 8px;
    margin-top: 20px;

    padding: 10px 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;

    margin-right: 15px;
    cursor: pointer;
`