import React, { useContext } from 'react'
import { SideBarListItemContainer, Row, P, Button, Avatar } from './SideBarListItem'

import { store } from '../../store'

import Selfie from '../../assets/self.png'

const SideBarListItem = ({powerPlant, action}) => {

    const { dispatch } = useContext(store)

    const avatars = [1, 2, 3]

    const openDashboard = () => {

        dispatch({type: 'toggle'})

        setTimeout(() => dispatch({type: 'endAction'}), 1000)
    }

    return (
        <SideBarListItemContainer>
            <Row>
                <div>
                    <h4>{powerPlant.nome}</h4>
                    <div>
                        <P>Owned by: <b>{powerPlant.owner}</b></P>
                    </div>
                    <div>
                        {avatars.map(a => <Avatar src={Selfie} className="rounded-circle avatars" width="15"></Avatar>)}
                    </div>
                </div>
                <div style={{ 
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Button onClick={() => openDashboard()}>Ver</Button>
                </div>
            </Row>
            
        </SideBarListItemContainer>
    );
}

export default SideBarListItem