import { useState, useContext } from 'react'
import { History } from '../../../../allContext'
// import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Medical = () => {
    const [text, setText] = useState('')
    const { stateMedicalHistory, dispatchMedicalHistory } = useContext(History)
    // const arr = []

    const submit = (e) => {
        e.preventDefault()
        dispatchMedicalHistory({
            type: 'input',
            payload: stateMedicalHistory.medical.length === 0 ? text : stateMedicalHistory.medical.concat('\n' + text),
        })
        setText('')
    }

    return (
        <div>
            <TextField text={text} setText={setText} label="Medical History" />
            {/* {medical.length !== 0 ? <Suggestion arr={arr} setText={setMedical} /> : null} */}
            <button onClick={submit} className={classes.btn}>
                Submit
            </button>
        </div>
    )
}

export default Medical
