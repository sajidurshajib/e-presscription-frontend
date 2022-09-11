import { useState, useContext } from 'react'
import { Refer } from '../../../allContext'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './Refer.module.css'

const ReferInp = () => {
    const [refer, setRefer] = useState('')
    const { stateRefer, dispatchRefer } = useContext(Refer)

    const submit = (e) => {
        e.preventDefault()
        dispatchRefer({ type: 'input', payload: refer })
        window.location.reload()
    }

    return (
        <div className={classes.Refer}>
            <TextField label={'Refer'} text={refer} setText={setRefer} />
            <button onClick={submit}>Submit</button>
            <h3>Preview</h3>
            <p className={classes.detail}>
                Refer to: <span>{stateRefer.detail}</span>
            </p>
        </div>
    )
}

export default ReferInp
