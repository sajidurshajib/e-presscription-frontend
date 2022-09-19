import {
    faClosedCaptioning,
    faHistory,
    faSearchPlus,
    faStethoscope,
    faCommentMedical,
    faCalendarAlt,
    faUserCheck,
    faPills,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { FieldContext, UserInfo } from '../../../allContext'
import docImg from '../../../assets/img/docstock.jpg'
import epLogo from '../../../assets/img/logo.png'
import classes from './Sidebar.module.css'
import SubmitEP from './SubmitEP/SubmitEP'

const Sidebar = () => {
    const { state, dispatch } = useContext(FieldContext)
    const { stateUser } = useContext(UserInfo)

    const [details, setDetails] = useState({})

    const apiV1 = process.env.REACT_APP_API_V1

    useEffect(() => {
        const detailFunc = async () => {
            const detailFetch = await fetch(`${apiV1}/doctors/detail/${stateUser.info.id}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                dataType: 'json',
                origin: '*',
                method: 'GET',
            })

            if (detailFetch.ok) {
                const detailJson = await detailFetch.json()
                setDetails(detailJson)
            }
        }
        try {
            detailFunc()
        } catch (e) {}
    }, [apiV1, stateUser])

    return (
        <div className={classes.Sidebar}>
            <div className={classes.epLogo}>
                <img src={epLogo} alt="" width="200px" />
            </div>
            <div className={classes.doc}>
                <div className={classes.docImg} style={{ backgroundImage: 'url(' + docImg + ')' }}></div>
                <h3>{stateUser.info.name}</h3>
                <p>{details?.specialities && details?.specialities[0].speciality}</p>
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
                <li
                    onClick={() => dispatch({ type: 'refer' })}
                    className={state.field === 'refer' ? classes.active : null}>
                    <FontAwesomeIcon icon={faUserCircle} />
                    Refer
                </li>
            </ul>
            <SubmitEP />
        </div>
    )
}

export default Sidebar
