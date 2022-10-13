import { useContext, useState, useEffect, useReducer } from 'react'
import { PatientInfo, Auth } from '../../allContext'
import { getWithAuthToken } from '../../api/get'
import { consultationReducer, consultationState } from '../../reducer/causeOfConsultation'
import { dob } from '../../utils/DateOfBirth'
import classes from './Patient.module.css'
import PatientSearch from './PatientSearch/PatientSearch'

const Patient = ({ cross }) => {
    const { statePatient, dispatchPatient } = useContext(PatientInfo)
    const { stateAuth } = useContext(Auth)

    const [stateConsultation, dispatchConsultation] = useReducer(consultationReducer, consultationState)

    // const [cause, setCause] = useState(statePatient.patient.cause_of_consultation || '')
    const [name, setName] = useState(statePatient.patient.name || '')
    const [phone, setPhone] = useState(statePatient.patient.phone || '')
    const [sex, setSex] = useState(statePatient.patient.sex || 'not selected')

    const [year, setYear] = useState(statePatient.patient.dob || '')
    const [month, setMonth] = useState(statePatient.patient.dob || '')
    const [address, setAddress] = useState(statePatient.patient.division || '')

    const [searchResult, setSearchResult] = useState([])

    const apiV1 = process.env.REACT_APP_API_V1
    const token = stateAuth.token

    useEffect(() => {
        getWithAuthToken(`${apiV1}/ep/patient-search?name=${name}&skip=0&limit=10`, token)
            .then((data) => {
                setSearchResult(data)

                setPhone(statePatient.patient.phone)
                setAddress(statePatient.patient.division)
                if (statePatient.patient.dob && statePatient.patient.dob.length !== 0) {
                    const [y, m, d] = dob(statePatient.patient.dob)
                    setYear(y)
                    setMonth(m)
                }
            })
            .catch((e) => {})
    }, [name, token, apiV1, statePatient.patient.dob, statePatient])

    return (
        <div className={classes.Patient}>
            <form>
                <span onClick={(e) => cross(false)}>x</span>
                <h2>Patient Information</h2>

                <div className={classes.Wrapper}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Patient name"
                    />
                    {/* Patient search modal */}
                    {(name.length !== 0) & (statePatient.patient.name !== name) ? (
                        <PatientSearch arr={searchResult} setPatient={dispatchPatient} setName={setName} />
                    ) : null}

                    <input
                        type="text"
                        value={stateConsultation.consultation}
                        onChange={(e) => dispatchConsultation({ type: 'input', payload: e.target.value })}
                        placeholder="Cause of consultation"
                    />

                    <div className={classes.Two}>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            placeholder="Phone number"
                        />
                        <select value={sex} onChange={(e) => setSex(e.target.value)}>
                            <option value="not selected" disabled>
                                Sex
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className={classes.Two}>
                        <input
                            type="number"
                            placeholder="Years"
                            min={0}
                            value={year}
                            onChange={(e) => setYear(parseInt(e.target.value))}
                        />

                        <input
                            type="number"
                            placeholder="Months"
                            min={0}
                            value={month}
                            onChange={(e) => setMonth(parseInt(e.target.value))}
                        />
                    </div>

                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder="Address"
                    />
                    <button onClick={(e) => cross(false)}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Patient
