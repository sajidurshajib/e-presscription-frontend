import { useReducer, useState } from 'react'
import { patientState, patientReducer } from '../../../../reducer/PatientInfoReducer'
import { adviceReducer, adviceState } from '../../../../reducer/adviceReducer'
import { chiefState, chiefReducer } from '../../../../reducer/chiefReducer'
import { diagnosisState, diagnosisReducer } from '../../../../reducer/diagnosisReducer'
import { referState, referReducer } from '../../../../reducer/referReducer'
import { userState, userReducer } from '../../../../reducer/userReducer'
import classes from './SubmitEP.module.css'

const SubmitEP = () => {
    const [epCreated, setEpCreated] = useState({ status: false, data: {} })
    const [stateChiefComplaints] = useReducer(chiefReducer, chiefState)
    const [stateAdvice] = useReducer(adviceReducer, adviceState)
    const [stateRefer] = useReducer(referReducer, referState)
    const [stateUser] = useReducer(userReducer, userState)
    const [statePatient] = useReducer(patientReducer, patientState)
    const [stateDiagnosis] = useReducer(diagnosisReducer, diagnosisState)

    const apiV1 = process.env.REACT_APP_API_V1

    // chief complaints array
    let ccList = []
    if (stateChiefComplaints.cc.length !== 0) {
        ccList = [
            ...stateChiefComplaints.cc.split('\n').map((cc) => ({
                chief_complaints: cc,
            })),
        ]
    }

    // advice array
    let adviceList = []
    if (stateAdvice.adv.length !== 0) {
        adviceList = [...stateAdvice.adv.split('\n').map((adv) => ({ advice: adv }))]
    }

    // refer
    let referDetail = stateRefer

    const submit = async (e) => {
        e.preventDefault()
        const epSubmitByFetch = await fetch(`${apiV1}/ep`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            origin: '*',
            method: 'POST',
            body: JSON.stringify({
                doctor_id: stateUser.info.id,
                patient_id: statePatient.patient.id,
                chief_complaints: [...ccList],
                diagnosis: [
                    {
                        diagnosis_type: 'probable',
                        diagnosis: stateDiagnosis.probable,
                    },
                    {
                        diagnosis_type: 'confirmatory',
                        diagnosis: stateDiagnosis.confirmatory,
                    },
                ],
                advices: [...adviceList],
                refer: { detail: referDetail.detail },
            }),
        })
        if (epSubmitByFetch.ok) {
            const data = await epSubmitByFetch.json()
            await setEpCreated({ status: true, data: data })
        }
    }
    if (epCreated.status === true) {
        // alert('Prescription created.')
    }
    return (
        <div className={classes.SubmitEP}>
            <button onClick={(e) => submit(e)}>Create Prescription</button>
            {epCreated.status === true ? (
                <button className={classes.viewBtn}>
                    <a href={`/ep/hxep${epCreated.data.id}`}>View Prescription</a>
                </button>
            ) : null}
        </div>
    )
}

export default SubmitEP
