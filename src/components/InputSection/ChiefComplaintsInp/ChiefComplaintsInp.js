import { useState } from 'react'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './ChiefComplaintsInp.module.css'

const ChiefComplaintsInp = () => {
    const [text, setText] = useState('')
    let arr = ['Fever for 7 days', 'Body Ache', 'Common cold']

    return (
        <div className={classes.ChiefComplaintsInp}>
            {/* <InputField text={text} setText={setText} label="Chief Complaints" /> */}

            <TextField text={text} setText={setText} label="Chief Complaints" />

            {text ? (
                <Suggestion
                    arr={arr.filter((val) => val.toLocaleLowerCase().includes(text.toLowerCase()))}
                    setText={setText}
                />
            ) : null}
        </div>
    )
}

export default ChiefComplaintsInp
