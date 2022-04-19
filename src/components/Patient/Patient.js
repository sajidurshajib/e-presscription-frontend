import { useContext, useState, useEffect } from 'react'
import { PatientInfo } from '../../allContext'
import classes from './Patient.module.css'

const Patient = ({ cross }) => {
    const { statePatient, dispatchPatient } = useContext(PatientInfo)

    const [name, setName] = useState(statePatient.patient.name || '')
    const [phone, setPhone] = useState(statePatient.patient.phone || '')
    const [sex, setSex] = useState(statePatient.patient.sex || 'not selected')

    const [year, setYear] = useState(statePatient.patient.year || '')
    const [month, setMonth] = useState(statePatient.patient.month || '')
    const [address, setAddress] = useState(statePatient.patient.address || '')

    useEffect(() => {
        dispatchPatient({
            type: 'input',
            payload: {
                name,
                year,
                month,
                phone,
                sex,
                address,
            },
        })
    }, [name, phone, sex, year, month, address, dispatchPatient])

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
