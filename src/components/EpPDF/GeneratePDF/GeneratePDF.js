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

    console.log(ep)
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

                        {/* history  */}
                        {ep.histories && ep.histories.length !== 0 ? (
                            <Fragment>
                                <h4>History</h4>

                                <p>Personal: </p>
                                {ep.histories
                                    .filter((v) => v.history_type === 'personal')
                                    .map((v, i) => (
                                        <span>{v.history_type}</span>
                                    ))}
                            </Fragment>
                        ) : null}

                        {/* Diagnosis */}

                        {ep?.diagnosis?.length !== 0 ? (
                            <Fragment>
                                <h4>D/D :</h4>
                                <ol className={classes.diagnosis}>
                                    {ep?.diagnosis &&
                                        ep?.diagnosis
                                            .filter((v) => v.diagnosis_type === 'probable')
                                            .map((v, i) => <li key={i}>{v.diagnosis}</li>)}
                                </ol>
                                <h4>Confirmatory Diagnosis :</h4>
                                <ol className={classes.diagnosis}>
                                    {ep?.diagnosis &&
                                        ep?.diagnosis
                                            .filter((v) => v.diagnosis_type === 'confirmatory')
                                            .map((v, i) => <li key={i}>{v.diagnosis}</li>)}
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
