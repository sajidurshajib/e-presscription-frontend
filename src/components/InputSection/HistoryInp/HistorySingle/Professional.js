import { useState, useContext } from 'react'
import { History } from '../../../../allContext'
// import Suggestion from '../../../ReUsable/Suggestion/Suggestion'
import TextField from '../../../ReUsable/TextField/TextField'
import classes from '../HistoryInp.module.css'

const Professional = () => {
    const [text, setText] = useState('')
    const { stateProfessionalHistory, dispatchProfessionalHistory } = useContext(History)
    // const arr = []

    const submit = (e) => {
        e.preventDefault()
        dispatchProfessionalHistory({
            type: 'input',
            payload:
                stateProfessionalHistory.professional.length === 0
                    ? text
                    : stateProfessionalHistory.professional.concat('\n' + text),
        })
        setText('')
    }

    return (
        <div>
            <TextField text={text} setText={setText} label="Personal History" />
            {/* {professional.length !== 0 ? <Suggestion arr={arr} setText={setProfessional} /> : null} */}
            <button onClick={submit} className={classes.btn}>
                Submit
            </button>
        </div>
    )
}

export default Professional
