import styled from 'styled-components'

export const DashboardContainer = styled.div`

    width: 100%;
    height: 100%;

    padding: 30px;
`

export const Row = styled.div`
    display: flex;

    align-items: center;

    ${props => {
        return props.col ? `justify-content: space-between;` : ``
    }}

    ${props => {
        return props.margin_top ? `margin-top: ${props.margin_top}` : ``;
    }}
`

export const GraphContainer = styled.div`
    width: 60vw;
    height: 70vh;

    background: white;
    padding: 30px;

    border-radius: 16px;
    margin-right: 30px;
    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);
`

export const MoneyContainer = styled.div`
    width: 35vw;
    height: 15vh;

    background: white;
    padding: 30px 30px;

    border-radius: 16px; 
    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);   

    display: flex;

    justify-content: space-between;
    align-items: center;
`

export const HistoryContainer = styled.div`
    width: 35vw;
    height: 51vh;

    background: white;
    padding: 10px 20px;

    border-radius: 16px;
    margin-top: 30px;
    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);
`

export const Img = styled.img`
    width: 56px;
    height: 56px;
`

export const MoneyText = styled.span`
    font-size: 56px;
    color: #2F2E41;
    margin-bottom: 0;

    align-items: center;
`

export const HistoryText = styled.div`
    font-size: 36px;
    color: #2F2E41;
`

export const Hr = styled.hr`
    margin: 0;

    ${props => {
        return props.margin_top ? `margin-top: ${props.margin_top}` : ``;
    }}
`

export const Percentage = styled.div`
    font-size: 100px;
    color: #2F2E41;
`

export const PercentageIncrease = styled.div`
    font-size: 40px;
    font-weight: 500px;
    color: #28a745;
`

export const Icon = styled.img`
    width: 40px;
    height: 40px;

    margin-right: -5px;

    animation: jump 1.2s infinite;

    @keyframes jump {
        0% { transform: translate(0, -20%) }
        50% { transform: translate(0, -40%) }
    }
`

export const InformationText = styled.div`
    font-size: 16px;
`

export const Value = styled.div`
    display: flex;
    text-align: right;
    opacity: 0.7;

    ${props => {
        return props.size ? `font-size: ${props.size}; align-items: bottom;` : ``;
    }}
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 10% 0 10%;
`

export const ButtonInterest = styled.button`
    background: transparent;
    outline: none;
    border: none;
    color: #2F2E41;

    padding: 0 15px;
    
    &:focus{
        outline: none;   
    }

    ${props => {
        return props.selected ? `color: #FF6349; border-radius: 16px; border 1px solid #FF6349;` : ``;
    }}

`