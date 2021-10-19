import { useState } from 'react'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Personal = () => {
    const [personal, setPersonal] = useState('')
    const arr = []
    return (
        <div>
            <TextField text={personal} setText={setPersonal} label="Personal History" />
            {personal.length !== 0 ? <Suggestion arr={arr} setText={setPersonal} /> : null}
            <button className={classes.btn}>Submit</button>
        </div>
    )
}

export default Personal
