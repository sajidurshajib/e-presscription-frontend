import { useState, useContext } from 'react'
import { Diagnosis } from '../../../allContext'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './DiagnosisInp.module.css'

const DiagnosisInp = () => {
    const { stateDiagnosis, dispatchDiagnosis } = useContext(Diagnosis)

    const [probable, setProbable] = useState('')
    const [confirm, setConfirm] = useState('')

    const probableSubmit = (e) => {
        e.preventDefault()
        dispatchDiagnosis({
            type: 'prbl',
            payload: stateDiagnosis.probable.length !== 0 ? stateDiagnosis.probable.concat('\n' + probable) : probable,
        })
        setProbable('')
    }

    const confirmSubmit = (e) => {
        e.preventDefault()
        dispatchDiagnosis({
            type: 'cnf',
            payload:
                stateDiagnosis.confirmatory.length !== 0 ? stateDiagnosis.confirmatory.concat('\n' + confirm) : confirm,
        })
        setConfirm('')
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
