import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    z-index: 0;
`

export const MapContainer = styled.div`
    z-index: 0;
`

export const HeaderContainer = styled.div`
    z-index: 1;

    position: absolute;
    top: 15px;

    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-grow: 1;

`

export const SidebarContainer = styled.div`
    z-index: 1;
    position: absolute;

    top: 100px;
    height: 90vh;
`