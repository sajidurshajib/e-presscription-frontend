import { useState } from 'react'
import InputField from '../../ReUsable/InputField/InputField'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import CoMorbidity from './CoMorbidity/CoMorbidity'
import classes from './HistoryInp.module.css'

const HistoryInp = () => {
    const [personal, setPersonal] = useState('')
    const [professional, setProfessional] = useState('')
    const [family, setFamily] = useState('')
    const [drug, setDrug] = useState('')
    const [medical, setMedical] = useState('')

    let arr = ['Fever for 7 days', 'Body Ache', 'Common cold']

    return (
        <div className={classes.HistoryInp}>
            <InputField text={personal} setText={setPersonal} label="Personal History" />
            {personal.length !== 0 ? <Suggestion arr={arr} setText={setPersonal} /> : null}

            <InputField text={professional} setText={setProfessional} label="Professional History" />
            {professional.length !== 0 ? <Suggestion arr={arr} setText={setProfessional} /> : null}

            <InputField text={family} setText={setFamily} label="Family History" />
            {family.length !== 0 ? <Suggestion arr={arr} setText={setFamily} /> : null}

            <InputField text={drug} setText={setDrug} label="Drug History" />
            {drug.length !== 0 ? <Suggestion arr={arr} setText={setDrug} /> : null}

            <InputField text={medical} setText={setMedical} label="Medical History" />
            {medical.length !== 0 ? <Suggestion arr={arr} setText={setMedical} /> : null}

            <CoMorbidity />
        </div>
    )
}

export default HistoryInp
