import { faAlignLeft, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useReducer, useState } from 'react'
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
    const [modal, setModal] = useState(false)

    return (
        <div className={classes.Nav}>
            <PatientInfo.Provider value={{ statePatient, dispatchPatient }}>
                <div className={classes.left}>
                    {location.pathname === '/' ? (
                        <div className={classes.alignLeft} onClick={() => dispatch({ type: h })}>
                            <FontAwesomeIcon icon={faAlignLeft} />
                        </div>
                    ) : (
                        <Link to="/">
                            <img src={epLogo} alt="" />
                        </Link>
                    )}
                    <div
                        className={`${classes.patient} ${
                            statePatient.patient.name.length !== 0 ? classes.ok : classes.add
                        }`}
                        onClick={(e) => setModal(!modal)}>
                        {statePatient.patient.name.length !== 0 ? (
                            <div>
                                <FontAwesomeIcon icon={faUser} />
                                <p>{statePatient.patient.name}</p>
                            </div>
                        ) : (
                            <FontAwesomeIcon icon={faUserPlus} />
                        )}
                    </div>
                </div>

                {modal ? <Patient cross={setModal} /> : null}
            </PatientInfo.Provider>
        </div>
    )
}
export default Nav
