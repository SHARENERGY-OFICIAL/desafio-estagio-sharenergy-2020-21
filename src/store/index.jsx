import React, { createContext, useReducer } from 'react'

const initialState = {openDashboard: false, actionCompleted: true}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'toggle':
                return { ...state, openDashboard: !state.openDashboard, actionCompleted: false }
            case 'endAction':
                return { ...state, actionCompleted: true }
            default:
                throw new Error(`Ação desconhecida: ${action.type}`)
        }
    }, initialState)

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export { store, StateProvider }