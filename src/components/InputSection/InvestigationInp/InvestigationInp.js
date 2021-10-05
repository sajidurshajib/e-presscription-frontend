import { useState } from 'react'
import InputField from '../../ReUsable/InputField/InputField'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import classes from './InvestigationInp.module.css'

const InvestigationInp = () => {
    const [text, setText] = useState('')
    let arr = ['Fever for 7 days', 'Body Ache', 'Common cold']

    return (
        <div className={classes.InvestigationInp}>
            <InputField text={text} setText={setText} label="Investigation" />

            {text ? (
                <Suggestion
                    arr={arr.filter((val) => val.toLocaleLowerCase().includes(text.toLowerCase()))}
                    setText={setText}
                />
            ) : null}
        </div>
    )
}

export default InvestigationInp
