import { useState, useContext } from 'react'
import { Diagnosis } from '../../../allContext'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './DiagnosisInp.module.css'

const DiagnosisInp = () => {
    const { dispatchDiagnosis } = useContext(Diagnosis)

    const [probable, setProbable] = useState('')
    const [confirm, setConfirm] = useState('')

    const probableSubmit = (e) => {
        e.preventDefault()
        dispatchDiagnosis({ type: 'prbl', payload: probable })
    }

    const confirmSubmit = (e) => {
        e.preventDefault()
        dispatchDiagnosis({ type: 'cnf', payload: confirm })
    }
    return (
        <div className={classes.DiagnosisInp}>
            <TextField label={'Probable Dx'} text={probable} setText={setProbable} />
            <button onClick={probableSubmit}>Submit</button>
            <TextField label={'Confirmatory Dx'} text={confirm} setText={setConfirm} />
            <button onClick={confirmSubmit}>Submit</button>
        </div>
    )
}

export default DiagnosisInp
