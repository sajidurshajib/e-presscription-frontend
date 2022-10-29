import { faAlignLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useReducer, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarContext, PatientInfo } from '../../allContext'
import epLogo from '../../assets/img/logo.png'
import { patientState, patientReducer } from '../../reducer/PatientInfoReducer'
import { dob } from '../../utils/DateOfBirth'
import Patient from '../Patient/Patient'
import classes from './Nav.module.css'

const Nav = () => {
    let location = useLocation()

    const { state, dispatch } = useContext(SidebarContext)
    let h = state.expand ? 'hide' : 'unhide'

    const [statePatient, dispatchPatient] = useReducer(patientReducer, patientState)
    const [modal, setModal] = useState(false)

    let y = ''
    let m = ''
    if (statePatient.patient.dob && statePatient.patient.dob.length !== 0) {
        let [year, month] = dob(statePatient.patient.dob)
        y = year
        m = month
    }

    return (
        <div className={classes.Nav}>
            <PatientInfo.Provider value={{ statePatient, dispatchPatient }}>
                <div className={classes.left}>
                    {/* header logo and menu icon  */}
                    {location.pathname === '/' ? (
                        <div className={classes.alignLeft} onClick={() => dispatch({ type: h })}>
                            <FontAwesomeIcon icon={faAlignLeft} />
                        </div>
                    ) : (
                        <Link to="/">
                            <img src={epLogo} alt="" />
                        </Link>
                    )}

                    {/* add class have text content  */}
                    <div
                        className={`${classes.patient} ${
                            statePatient.patient.name.length !== 0 ? classes.ok : classes.add
                        }`}
                        onClick={(e) => setModal(!modal)}>
                        {statePatient.patient.name && statePatient.patient.name.length !== 0 ? (
                            <div>
                                <FontAwesomeIcon icon={faUserCircle} />
                                <p>
                                    {statePatient.patient.name} ({statePatient.patient.sex})
                                    <span>{statePatient.patient.phone}</span>
                                </p>
                                <p>
                                    <span>
                                        Age:
                                        {statePatient.patient.dob && statePatient.patient.dob.length === 0
                                            ? '--'
                                            : ` ${y} years ${m} months`}
                                    </span>
                                    <span>Address: {statePatient.patient.division}</span>
                                </p>
                            </div>
                        ) : (
                            ''
                            // <FontAwesomeIcon icon={faUserPlus} /> Do not needed now
                        )}
                    </div>
                </div>

                {modal ? <Patient cross={setModal} /> : null}
            </PatientInfo.Provider>
        </div>
    )
}
export default Nav
