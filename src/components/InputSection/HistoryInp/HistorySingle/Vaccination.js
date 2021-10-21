import { useState } from 'react'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Vaccination = () => {
    const [vaccination, setVaccination] = useState('')
    const arr = []
    return (
        <div>
            <TextField text={vaccination} setText={setVaccination} label="Vaccination History" />
            {vaccination.length !== 0 ? <Suggestion arr={arr} setText={setVaccination} /> : null}
            <button className={classes.btn}>Submit</button>
        </div>
    )
}

export default Vaccination
