import { useState } from 'react'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Medical = () => {
    const [medical, setMedical] = useState('')
    const arr = []
    return (
        <div>
            <TextField text={medical} setText={setMedical} label="Medical History" />
            {medical.length !== 0 ? <Suggestion arr={arr} setText={setMedical} /> : null}
            <button className={classes.btn}>Submit</button>
        </div>
    )
}

export default Medical
