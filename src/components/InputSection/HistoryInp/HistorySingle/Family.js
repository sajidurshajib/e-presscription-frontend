import { useState, useContext } from 'react'
import { History } from '../../../../allContext'
// import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Family = () => {
    const [text, setText] = useState('')
    const { stateFamilyHistory, dispatchFamilyHistory } = useContext(History)
    // const arr = []

    const submit = (e) => {
        e.preventDefault()
        dispatchFamilyHistory({
            type: 'input',
            payload: stateFamilyHistory.family.length === 0 ? text : stateFamilyHistory.family.concat('\n' + text),
        })
        setText('')
    }
    return (
        <div>
            <TextField text={text} setText={setText} label="Family History" />
            {/* {family.length !== 0 ? <Suggestion arr={arr} setText={setFamily} /> : null} */}
            <button onClick={submit} className={classes.btn}>
                Submit
            </button>
        </div>
    )
}

export default Family
