import { Suspense, useReducer } from 'react'
import { SidebarContext } from '../allContext'
import Dashboard from '../components/Dashboard/Dashboard'
import { sidebarState, sidebarReducer } from '../reducer/sidebarReducer'

const EprescriptionPage = () => {
    const [stateSidebar, dispatchSidebar] = useReducer(sidebarReducer, sidebarState)
    return (
        <div>
            <SidebarContext.Provider value={{ state: stateSidebar, dispatch: dispatchSidebar }}>
                {/* added lazy loading */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Dashboard />
                </Suspense>
            </SidebarContext.Provider>
        </div>
    )
}

export default EprescriptionPage
