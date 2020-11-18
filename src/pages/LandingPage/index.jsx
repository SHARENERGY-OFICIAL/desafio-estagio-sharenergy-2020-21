import React, {useState, useEffect, useContext} from 'react'

import { Container, HeaderContainer, MapContainer, SidebarContainer } from './LandingPage'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Map from '../../components/Map'

import { store } from '../../store'

const LandingPage = () => {

    const [usuario, setUsuario] = useState({})
    const { state } = useContext(store)

    useEffect(() => {

        const json = require("../../api/dadosClientes.json")

        const [usuario] = json.filter(u => u.nomeCliente === "Maria Coelho")

        setUsuario(usuario)
    })

    return (
        <Container>
            <HeaderContainer >
                <Header openedDashboard={state.openDashboard}/>
            </HeaderContainer>
            <SidebarContainer toggle={state.openDashboard} >
                <Sidebar toggle={state.openDashboard} usuario={usuario}/>
            </SidebarContainer>
            { !state.openDashboard ?  
                <MapContainer >
                    <Map />
                </MapContainer>
                : ''
            }
            
        </Container>
    )
}

export default LandingPage