import { faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useReducer } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarContext, PatientInfo } from '../../allContext'
import epLogo from '../../assets/img/logo.png'
import { patientState, patientReducer } from '../../reducer/PatientInfoReducer'
import Patient from '../Patient/Patient'
import classes from './Nav.module.css'

const Nav = () => {
    let location = useLocation()

    const { state, dispatch } = useContext(SidebarContext)
    let h = state.expand ? 'hide' : 'unhide'

    const [statePatient, dispatchPatient] = useReducer(patientReducer, patientState)
    return (
        <div className={classes.Nav}>
            {/* e-prescription logo */}
            {location.pathname === '/' ? (
                <span className={classes.alignLeft} onClick={() => dispatch({ type: h })}>
                    <FontAwesomeIcon icon={faAlignLeft} />
                </span>
            ) : (
                <Link to="/">
                    <img src={epLogo} alt="" />
                </Link>
            )}
            <PatientInfo.Provider value={{ statePatient, dispatchPatient }}>
                <Patient />
            </PatientInfo.Provider>
            {/* <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faPrescription} />
                        ePrescription
                    </Link>
                </li>
            </ul> */}
        </div>
    )
}
export default Nav
