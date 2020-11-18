import React from 'react'
import Profile from '../../assets/self.png'
import TrashIcon from '../../assets/trash.svg'

import { SettingsPageContainer, CrudBox, UserCard, Img, ValueHeader, ValueField, Button, Icon } from './SettingsPage'

const SettingsPage = () => {

    let i = [1,2,3,4];
    return (
        <SettingsPageContainer>
            <CrudBox>
                {
                    i.map( m => 
                        <UserCard>
                            <Img src={Profile}/>
                            
                            <span style={{display: 'flex', width: '100%'}}>
                                <ValueHeader>Nome: </ValueHeader>
                                <ValueField>Gabriel Martins Silva</ValueField>
                                <ValueHeader>Porcentagem: </ValueHeader>
                                <ValueField>80%</ValueField>
                            </span>
                            
                            <span style={{display: 'flex'}}>
                                <Button>
                                    Ver
                                </Button>
                                <Button>
                                    <Icon src={TrashIcon}/>
                                </Button>
                            </span>

                        </UserCard>
                    )
                }
            </CrudBox>
        </SettingsPageContainer>
    )
}

export default SettingsPage