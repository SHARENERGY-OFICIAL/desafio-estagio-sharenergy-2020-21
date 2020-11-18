import React, { useState, useEffect, useContext } from 'react'
import SideBarListItem from '../SideBarListItem'
import Dashboard from '../Dashboard'

import { store } from '../../store'

import { SidebarContainer, SidebarTitle, HrTitle, HrItem } from './Sidebar'
import Usinas from '../../api/infoUsina.json'

const Sidebar = ({completed, usuario}) => {

    const { state, dispatch } = useContext(store)

    const [powerPlants, setPowerPlants] = useState([])

    const getMyUsinas = (usinas) => {
        const myUsinas = Usinas.filter(u => usinas && usinas.some(us => us.numeroUsina === u.numeroUsina))
        setPowerPlants(myUsinas)
    }

    useEffect(() => {
        getMyUsinas(usuario.usinas)
    }, [usuario])

    return (
        <SidebarContainer toggle={state.openDashboard}>
            { !state.openDashboard && state.actionCompleted ? 
                <div>
                    <SidebarTitle>
                        Minhas Usinas
                    </SidebarTitle>
                    <HrTitle />
                    {powerPlants && powerPlants.map((p, i) => (
                        <div>
                            <SideBarListItem key={i.toString()} powerPlant={p} ></SideBarListItem>
                            <HrItem/>
                        </div> 
                    ))}
                </div>
            : state.actionCompleted ?
                <Dashboard usuario={usuario} usina={1}/>
            : ''   
            }
        </SidebarContainer>
    );
}

export default Sidebar