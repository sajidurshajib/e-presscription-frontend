import React, { Fragment, useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PdfWrapped } from '../../../allContext'
import { getFromAPI } from '../../../api/get'
import classes from './Generate.module.css'

// import HistoryChildView from './HistoryChildView'
// import OnExam from './OnExam'

export const GeneratePDF = React.forwardRef((props, ref) => {
    const { hxepid } = useParams()
    const [ep, setEp] = useState({})
    const [profile, setProfile] = useState('')

    const apiV1 = process.env.REACT_APP_API_V1

    useEffect(() => {
        let id = hxepid.slice(4)
        let endpoint = `${apiV1}/ep/${id}`
        getFromAPI(endpoint)
            .then((data) => setEp(data))
            .catch((e) => {})
    }, [apiV1, hxepid])

    const {
        statePatient,
        // stateChief,
        // stateInvestigation,
        // stateDiagnosis,
        // stateAdvice,
        // stateMedicine,
        // statePersonalHistory,
        // stateCoMorbidity,
        // stateProfessionalHistory,
        // stateFamilyHistory,
        // stateDrugHistory,
        // stateMedicalHistory,
        // stateVaccinationHistory,
    } = useContext(PdfWrapped)
    return (
        <div className={classes.wrapper}>
            <div className={classes.Generate} ref={ref}>
                {/* Top field */}
                <div className={classes.top}>
                    <div className={classes.topLeft}>
                        <h3>{profile?.user?.name}</h3>
                        {profile.prescription_header_left?.split('\n')?.map((v, i) => {
                            return <p key={i}>{v}</p>
                        })}
                    </div>
                    <div className={classes.topRight}>
                        {/* <img src={boxLogo} alt="Box Logo" /> */}
                        <h3>Chamber Address {hxepid.slice(4)}</h3>
                        {profile.prescription_header_right?.split('\n')?.map((v, i) => {
                            return <p key={i}>{v}</p>
                        })}
                    </div>
                </div>

                {/* Patient */}
                <div className={classes.patient}>
                    <p>
                        <b>Name :</b> {statePatient.patient.name}
                    </p>
                    <p>
                        <b>Age :</b>{' '}
                    </p>
                    <p>
                        <b>Sex :</b> {statePatient.patient.sex}
                    </p>
                    <p className={classes.date}>
                        <b>Date :</b>
                        {ep.created_at?.split('T')[0]}
                    </p>
                </div>

                {/* Middle body */}
                <div className={classes.middleBody}>
                    {/* Left part */}
                    <div className={classes.leftBody}>
                        {/* Chief Complaints */}
                        {ep?.chief_complaints?.length !== 0 ? (
                            <Fragment>
                                <h4>C/C :</h4>
                                <ol>
                                    {ep?.chief_complaints?.map((v, i) => (
                                        <li key={i}>{v.chief_complaints}</li>
                                    ))}
                                </ol>
                            </Fragment>
                        ) : null}
                    </div>
                    {/* Right part */}
                    <div className={classes.rightBody}>
                        {/* Advice */}
                        {ep?.advices?.length !== 0 ? (
                            <Fragment>
                                <h4>Advice :</h4>
                                <ol>
                                    {ep?.advices?.map((v, i) => {
                                        return <li key={i}>{v.advice}</li>
                                    })}
                                </ol>
                            </Fragment>
                        ) : null}

                        {/* refer */}
                        {/* <p>Refer to {ep?.refer[0]?.detail}</p> */}
                        <p className={classes.refer}>{/* Refer to: <span>{ep?.refer[0]?.detail}</span> */}</p>
                    </div>
                    <div></div>
                    <div className={classes.signature}>
                        <div>{/* <img src={healthxCircle} alt="" /> */}</div>
                        <div>
                            {profile.prescription_header_left?.split('\n')?.map((v, i) => {
                                return <p key={i}>{v}</p>
                            })}
                        </div>
                    </div>
                </div>

                <div className={classes.footer}>
                    <p>
                        This e-prescription developed by <b>HEALTHx</b>
                    </p>
                </div>
            </div>
        </div>
    )
})
