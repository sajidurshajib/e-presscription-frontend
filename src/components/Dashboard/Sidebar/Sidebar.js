import {
    faClosedCaptioning,
    faHistory,
    faSearchPlus,
    faStethoscope,
    faCommentMedical,
    faCalendarAlt,
    faUserCheck,
    faPills,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { FieldContext } from '../../../allContext'
import docImg from '../../../assets/img/docstock.jpg'
import epLogo from '../../../assets/img/logo.png'
import classes from './Sidebar.module.css'
import SubmitEP from './SubmitEP/SubmitEP'

const Sidebar = () => {
    const { state, dispatch } = useContext(FieldContext)

    return (
        <div className={classes.Sidebar}>
            <div className={classes.epLogo}>
                <img src={epLogo} alt="" width="200px" />
            </div>
            <div className={classes.doc}>
                <div className={classes.docImg} style={{ backgroundImage: 'url(' + docImg + ')' }}></div>
                <h3>Dr. Rashadul Islam</h3>
                <p>Medicine Specialist</p>
                <hr />
            </div>

            <ul className={classes.nav}>
                <li
                    onClick={() => dispatch({ type: 'chief' })}
                    className={state.field === 'chief' ? classes.active : null}>
                    <FontAwesomeIcon icon={faClosedCaptioning} />
                    Chief Complaints
                </li>
                <li
                    onClick={() => dispatch({ type: 'history' })}
                    className={state.field === 'history' ? classes.active : null}>
                    <FontAwesomeIcon icon={faHistory} />
                    History
                </li>
                <li
                    onClick={() => dispatch({ type: 'onexam' })}
                    className={state.field === 'onexam' ? classes.active : null}>
                    <FontAwesomeIcon icon={faUserCheck} />
                    On-Examination
                </li>
                <li
                    onClick={() => dispatch({ type: 'investigation' })}
                    className={state.field === 'investigation' ? classes.active : null}>
                    <FontAwesomeIcon icon={faSearchPlus} />
                    Investigation
                </li>
                <li
                    onClick={() => dispatch({ type: 'diagnosis' })}
                    className={state.field === 'diagnosis' ? classes.active : null}>
                    <FontAwesomeIcon icon={faStethoscope} />
                    Diagnosis
                </li>
                <li
                    onClick={() => dispatch({ type: 'medicine' })}
                    className={state.field === 'medicine' ? classes.active : null}>
                    <FontAwesomeIcon icon={faPills} />
                    Medicine
                </li>
                <li
                    onClick={() => dispatch({ type: 'advice' })}
                    className={state.field === 'advice' ? classes.active : null}>
                    <FontAwesomeIcon icon={faCommentMedical} />
                    Advice
                </li>
                <li
                    onClick={() => dispatch({ type: 'next' })}
                    className={state.field === 'next' ? classes.active : null}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    Next Follow up
                </li>
            </ul>
            <SubmitEP />
        </div>
    )
}

export default Sidebar
