import { useReducer, useState } from 'react'
import { patientState, patientReducer } from '../../../../reducer/PatientInfoReducer'
import { adviceReducer, adviceState } from '../../../../reducer/adviceReducer'
import { chiefState, chiefReducer } from '../../../../reducer/chiefReducer'
import { diagnosisState, diagnosisReducer } from '../../../../reducer/diagnosisReducer'
import { drugHistoryState, drugHistoryReducer } from '../../../../reducer/drugHistoryReducer'
import { familyHistoryState, familyHistoryReducer } from '../../../../reducer/familyHistoryReducer'
import { medicalHistoryState, medicalHistoryReducer } from '../../../../reducer/medicalHistoryReducer'
import { personalHistoryState, personalHistoryReducer } from '../../../../reducer/personalHistoryReducer'
import { professionalHistoryState, professionalHistoryReducer } from '../../../../reducer/professionalHistoryReducer'
import { referState, referReducer } from '../../../../reducer/referReducer'
import { userState, userReducer } from '../../../../reducer/userReducer'
import { vaccinationHistoryState, vaccinationHistoryReducer } from '../../../../reducer/vaccinationHistoryReducer'
import classes from './SubmitEP.module.css'

const SubmitEP = () => {
    const [epCreated, setEpCreated] = useState({ status: false, data: {} })
    const [stateChiefComplaints] = useReducer(chiefReducer, chiefState)
    const [stateAdvice] = useReducer(adviceReducer, adviceState)
    const [stateRefer] = useReducer(referReducer, referState)
    const [stateUser] = useReducer(userReducer, userState)
    const [statePatient] = useReducer(patientReducer, patientState)
    const [statePersonalHistory] = useReducer(personalHistoryReducer, personalHistoryState)
    const [stateProfessionalHistory] = useReducer(professionalHistoryReducer, professionalHistoryState)
    const [stateFamilyHistory] = useReducer(familyHistoryReducer, familyHistoryState)
    const [stateDrugHistory] = useReducer(drugHistoryReducer, drugHistoryState)
    const [stateMedicalHistory] = useReducer(medicalHistoryReducer, medicalHistoryState)
    const [stateVaccinationHistory] = useReducer(vaccinationHistoryReducer, vaccinationHistoryState)
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

    // history
    let history = []

    if (statePersonalHistory.personal.length !== 0) {
        let phArr = statePersonalHistory.personal.split('\n')
        phArr.forEach((item) => {
            history.push({ history_type: 'personal', history: item })
        })
    }

    if (stateProfessionalHistory.professional.length !== 0) {
        let proArr = stateProfessionalHistory.professional.split('\n')
        proArr.forEach((item) => {
            history.push({ history_type: 'professional', history: item })
        })
    }

    if (stateFamilyHistory.family.length !== 0) {
        let famArr = stateFamilyHistory.family.split('\n')
        famArr.forEach((item) => {
            history.push({ history_type: 'family', history: item })
        })
    }

    if (stateDrugHistory.drug.length !== 0) {
        let drugArr = stateDrugHistory.drug.split('\n')
        drugArr.forEach((item) => {
            history.push({ history_type: 'drug', history: item })
        })
    }

    if (stateMedicalHistory.medical.length !== 0) {
        let medicalArr = stateMedicalHistory.medical.split('\n')
        medicalArr.forEach((item) => {
            history.push({ history_type: 'medical', history: item })
        })
    }

    if (stateVaccinationHistory.vaccination.length !== 0) {
        let vaccinationArr = stateVaccinationHistory.vaccination.split('\n')
        vaccinationArr.forEach((item) => {
            history.push({ history_type: 'vaccination', history: item })
        })
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
                histories: [...history],

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
