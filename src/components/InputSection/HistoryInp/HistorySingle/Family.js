import { useState } from 'react'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Family = () => {
    const [family, setFamily] = useState('')
    const arr = []
    return (
        <div>
            <TextField text={family} setText={setFamily} label="Family History" />
            {family.length !== 0 ? <Suggestion arr={arr} setText={setFamily} /> : null}
            <button className={classes.btn}>Submit</button>
        </div>
    )
}

export default Family
