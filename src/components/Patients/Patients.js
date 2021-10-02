import { useReducer } from 'react'
import { SidebarContext } from '../../allContext'
import { sidebarState, sidebarReducer } from '../../reducer/SidebarReducer'
import Nav from '../Nav/Nav'

const Patients = () => {
    const [stateSidebar, dispatchSidebar] = useReducer(sidebarReducer, sidebarState)
    return (
        <div>
            <SidebarContext.Provider value={{ state: stateSidebar, dispatch: dispatchSidebar }}>
                <Nav />
            </SidebarContext.Provider>
        </div>
    )
}
export default Patients
