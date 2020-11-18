import styled from 'styled-components'

export const SideBarListItemContainer = styled.div`
    justify-content: center;

    padding: 10px 30px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;

    & h4 {
        margin-bottom: 0;
    }
`

export const P = styled.p`
    margin-bottom: 0;
    font-size: 16px;
`

export const Button = styled.button`
    background: transparent;
    border-radius: 8px;
    border: 1px solid #28a745;
    color: #28a745;
    padding: 0 20px;

    &:hover {
        background: #28a745;
        color: #f9f9f9;
        outline: none;
    }
`

export const Avatar = styled.img`
    border: 1px solid #F0F0F5;

    &:not(:first-child) {
        margin-left: -5px;
    }
`