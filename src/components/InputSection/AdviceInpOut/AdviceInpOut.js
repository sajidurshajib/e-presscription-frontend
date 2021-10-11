import { useState } from 'react'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './AdviceInpOut.module.css'

const AdviceInpOut = () => {
    const [text, setText] = useState('')
    return (
        <div className={classes.AdviceInpOut}>
            <TextField text={text} setText={setText} label="Advice" />
        </div>
    )
}

export default AdviceInpOut
