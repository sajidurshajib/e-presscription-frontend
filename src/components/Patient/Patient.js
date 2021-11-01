import { useContext, useState, useEffect } from 'react'
import { PatientInfo } from '../../allContext'
import classes from './Patient.module.css'

const Patient = () => {
    const { statePatient, dispatchPatient } = useContext(PatientInfo)

    const [name, setName] = useState(statePatient.patient.name || '')
    const [phone, setPhone] = useState(statePatient.patient.phone || '')
    const [sex, setSex] = useState(statePatient.patient.sex || 'not selected')
    const [age, setAge] = useState(statePatient.patient.age || '')
    const [address, setAddress] = useState(statePatient.patient.address || '')

    useEffect(() => {
        dispatchPatient({
            type: 'input',
            payload: {
                name,
                phone,
                sex,
                age,
                address,
            },
        })
    }, [name, phone, sex, age, address, dispatchPatient])

    return (
        <div className={classes.Patient}>
            <div className={classes.wrap1}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Patient name" />
                <input value={age} onChange={(e) => setAge(parseInt(e.target.value))} type="number" placeholder="Age" />
                <select value={sex} onChange={(e) => setSex(e.target.value)}>
                    <option value="not selected" disabled>
                        Sex
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className={classes.wrap2}>
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
