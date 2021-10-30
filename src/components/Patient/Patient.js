import { useContext, useState, useEffect } from 'react'
import { PatientInfo } from '../../allContext'
import classes from './Patient.module.css'

const Patient = () => {
    const { statePatient, dispatchPatient } = useContext(PatientInfo)

    const [name, setName] = useState(statePatient.patient.name || '')
    const [phone, setPhone] = useState(statePatient.patient.phone || '')
    const [sex, setSex] = useState(statePatient.patient.sex || 'male')
    const [age, setAge] = useState(statePatient.patient.age || 0)
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
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="Phone number"
                />
            </div>
            <div className={classes.wrap2}>
                <select value={sex} onChange={(e) => setSex(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input value={age} onChange={(e) => setAge(parseInt(e.target.value))} type="number" placeholder="Age" />
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />
            </div>
        </div>
    )
}

export default Patient
