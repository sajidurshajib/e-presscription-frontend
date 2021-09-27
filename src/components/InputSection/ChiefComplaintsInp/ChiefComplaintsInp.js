import { useState } from 'react'
import InputField from '../../ReUsable/InputField/InputField'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import classes from './ChiefComplaintsInp.module.css'

const ChiefComplaintsInp = () => {
    const [text, setText] = useState('')
    let arr = ['Fever for 7 days', 'Body Ache', 'Common cold']
    return (
        <div className={classes.ChiefComplaintsInp}>
            <InputField text={text} setText={setText} label="Chief Complaints" />
            {text.length !== 0 ? <Suggestion arr={arr} setText={setText} /> : null}
        </div>
    )
}

export default ChiefComplaintsInp
