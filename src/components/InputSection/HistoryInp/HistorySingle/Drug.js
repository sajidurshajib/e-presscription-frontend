import { useState, useContext } from 'react'
import { History } from '../../../../allContext'
// import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Drug = () => {
    const [text, setText] = useState('')
    const { stateDrugHistory, dispatchDrugHistory } = useContext(History)
    // const arr = []

    const submit = (e) => {
        e.preventDefault()
        dispatchDrugHistory({
            type: 'input',
            payload: stateDrugHistory.drug.length === 0 ? text : stateDrugHistory.drug.concat('\n' + text),
        })
        setText('')
    }
    return (
        <div>
            <TextField text={text} setText={setText} label="Drug History" />
            {/* {drug.length !== 0 ? <Suggestion arr={arr} setText={setDrug} /> : null} */}
            <button onClick={submit} className={classes.btn}>
                Submit
            </button>
        </div>
    )
}

export default Drug
