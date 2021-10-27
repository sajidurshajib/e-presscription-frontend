import { useState, useContext } from 'react'
import { History } from '../../../../allContext'
// import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Vaccination = () => {
    const [text, setText] = useState('')
    const { stateVaccinationHistory, dispatchVaccinationHistory } = useContext(History)
    // const arr = []
    const submit = (e) => {
        e.preventDefault()
        dispatchVaccinationHistory({
            type: 'input',
            payload:
                stateVaccinationHistory.vaccination.length === 0
                    ? text
                    : stateVaccinationHistory.vaccination.concat('\n' + text),
        })
        setText('')
    }
    return (
        <div>
            <TextField text={text} setText={setText} label="Vaccination History" />
            {/* {vaccination.length !== 0 ? <Suggestion arr={arr} setText={setVaccination} /> : null} */}
            <button onClick={submit} className={classes.btn}>
                Submit
            </button>
        </div>
    )
}

export default Vaccination
