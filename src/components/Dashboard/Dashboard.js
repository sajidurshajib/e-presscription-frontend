import { useContext, useReducer } from 'react'
import { FieldContext, SidebarContext } from '../../allContext'
import { fieldState, fieldReducer } from '../../reducer/fieldReducer'
import Body from '../Body/Body'
import Nav from '../Nav/Nav'
import classes from './Dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'

const Dashboard = () => {
    const { state } = useContext(SidebarContext)
    const [stateField, dispatchField] = useReducer(fieldReducer, fieldState)
    return (
        <div className={`${classes.Dashboard} ${state.expand === false ? classes.minimize : classes.maximize}`}>
            <FieldContext.Provider value={{ state: stateField, dispatch: dispatchField }}>
                <Sidebar />
                <div>
                    <Nav />
                    <Body />
                </div>
            </FieldContext.Provider>
        </div>
    )
}

export default Dashboard
