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
            <TextField label={'Reffer'} text={refer} setText={setRefer} />
            <button onClick={submit}>Submit</button>
            {stateRefer.detail && stateRefer.detail.length !== 0 ? (
                <>
                    <h3>Preview</h3>
                    <p className={classes.detail}>
                        Reffer to: <span>{stateRefer.detail}</span>
                    </p>
                </>
            ) : null}
        </div>
    )
}

export default ReferInp
