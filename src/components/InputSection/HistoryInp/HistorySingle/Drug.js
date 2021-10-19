import { useState } from 'react'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Drug = () => {
    const [drug, setDrug] = useState('')
    const arr = []
    return (
        <div>
            <TextField text={drug} setText={setDrug} label="Drug History" />
            {drug.length !== 0 ? <Suggestion arr={arr} setText={setDrug} /> : null}
            <button className={classes.btn}>Submit</button>
        </div>
    )
}

export default Drug
