import { useContext, useState, useEffect } from 'react'
import { PatientInfo, Auth } from '../../allContext'
import { dob } from '../../utils/DateOfBirth'
import classes from './Patient.module.css'
import PatientSearch from './PatientSearch/PatientSearch'

const Patient = ({ cross }) => {
    const { statePatient, dispatchPatient } = useContext(PatientInfo)
    const { stateAuth } = useContext(Auth)

    const [cause, setCause] = useState(statePatient.patient.cause_of_consultation || '')
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
        const search = async () => {
            let patientFetch = await fetch(`${apiV1}/ep/patient-search?name=${name}&skip=0&limit=10`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let patientJson = await patientFetch.json()

            if (patientFetch.ok) {
                setSearchResult(patientJson)
            }

            // setPhone(statePatient.patient.phone)
            // setAddress(statePatient.patient.division)
            if (statePatient.patient.dob && statePatient.patient.dob.length !== 0) {
                const [y, m, d] = dob(statePatient.patient.dob)
                setYear(y)
                setMonth(m)
            }
        }
        try {
            search()
        } catch (e) {}
    }, [name, token, apiV1, statePatient.patient.dob])

    // const [y, m, d] = dob(statePatient.patient.dob)

    return (
        <div className={classes.Patient}>
            <form>
                <span onClick={(e) => cross(false)}>x</span>
                <h2>Patient Information</h2>

                <div className={classes.Wrapper}>
                    <input
                        type="text"
                        value={cause}
                        onChange={(e) => setCause(e.target.value)}
                        placeholder="Cause of consultation"
                    />
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Patient name"
                    />
                    {/* Patient search modal */}
                    {(name.length !== 0) & (statePatient.patient.name !== name) ? (
                        <PatientSearch arr={searchResult} setPatient={dispatchPatient} cross={cross} />
                    ) : null}

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
