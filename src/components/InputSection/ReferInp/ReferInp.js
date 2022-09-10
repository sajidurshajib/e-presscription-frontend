import { useState } from 'react'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './Refer.module.css'

const ReferInp = () => {
    const [refer, setRefer] = useState('')
    return (
        <div className={classes.Refer}>
            <TextField label={'Refer'} text={refer} setText={setRefer} />
            <button>Submit</button>
        </div>
    )
}

export default ReferInp
