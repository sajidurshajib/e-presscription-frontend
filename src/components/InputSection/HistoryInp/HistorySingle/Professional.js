import { useState } from 'react'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Professional = () => {
    const [professional, setProfessional] = useState('')
    const arr = []
    return (
        <div>
            <TextField text={professional} setText={setProfessional} label="Personal History" />
            {professional.length !== 0 ? <Suggestion arr={arr} setText={setProfessional} /> : null}
            <button className={classes.btn}>Submit</button>
        </div>
    )
}

export default Professional
