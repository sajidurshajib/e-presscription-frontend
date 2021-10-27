import { useState, useContext } from 'react'
import { History } from '../../../../allContext'
// import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Personal = () => {
    const [text, setText] = useState('')
    const { statePersonalHistory, dispatchPersonalHistory } = useContext(History)

    // const arr = []
    const submit = (e) => {
        e.preventDefault()
        dispatchPersonalHistory({
            type: 'input',
            payload:
                statePersonalHistory.personal.length === 0 ? text : statePersonalHistory.personal.concat('\n' + text),
        })
        setText('')
    }

    return (
        <div>
            <TextField text={text} setText={setText} label="Personal History" />
            {/* {personal.length !== 0 ? <Suggestion arr={arr} setText={setPersonal} /> : null} */}
            <button onClick={submit} className={classes.btn}>
                Submit
            </button>
        </div>
    )
}

export default Personal
