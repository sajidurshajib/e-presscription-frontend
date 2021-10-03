import { useState } from 'react'
import InputField from '../../ReUsable/InputField/InputField'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import classes from './HistoryInp.module.css'

const HistoryInp = () => {
    const [personal, setPersonal] = useState('')
    const [professional, setProfessional] = useState('')

    let arr = ['Fever for 7 days', 'Body Ache', 'Common cold']

    return (
        <div className={classes.HistoryInp}>
            <InputField text={personal} setText={setPersonal} label="Personal History" />
            {personal.length !== 0 ? <Suggestion arr={arr} setText={setPersonal} /> : null}

            <InputField text={professional} setText={setProfessional} label="Professional History" />
            {professional.length !== 0 ? <Suggestion arr={arr} setText={setProfessional} /> : null}
        </div>
    )
}

export default HistoryInp
