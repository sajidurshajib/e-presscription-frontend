import { useReducer } from 'react'
import { FieldContext } from '../../allContext'
import { fieldState, fieldReducer } from '../../reducer/fieldReducer'
import Body from '../Body/Body'
import Nav from '../Nav/Nav'
import classes from './Dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'

const Dashboard = () => {
    const [state, dispatch] = useReducer(fieldReducer, fieldState)
    return (
        <div className={`${classes.Dashboard}`}>
            {/* <div className={`${classes.Dashboard} ${classes.minimize}`}> */}
            <FieldContext.Provider value={{ state, dispatch }}>
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
