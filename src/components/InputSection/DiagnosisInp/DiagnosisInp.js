import { useState } from 'react'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './DiagnosisInp.module.css'

const DiagnosisInp = () => {
    const [probable, setProbable] = useState('')
    const [confirm, setConfirm] = useState('')

    return (
        <div className={classes.DiagnosisInp}>
            <TextField label={'Probable Dx'} text={probable} setText={setProbable} />
            <TextField label={'Confirmatory Dx'} text={confirm} setTex={setConfirm} />
        </div>
    )
}

export default DiagnosisInp
