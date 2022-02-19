import { useContext, useState, useEffect } from 'react'
import { PatientInfo } from '../../allContext'
import classes from './Patient.module.css'

const Patient = () => {
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
            <div className={classes.wrap1}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Patient name" />
                {/* <input value={age} onChange={(e) => setAge(parseInt(e.target.value))} type="number" placeholder="Age" /> */}
                <label>Age: </label>
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
            <div className={classes.wrap2}>
                <select value={sex} onChange={(e) => setSex(e.target.value)}>
                    <option value="not selected" disabled>
                        Sex
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="Phone number"
                />
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />
            </div>
        </div>
    )
}

export default Patient
