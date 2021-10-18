import { useState } from 'react'
import InputField from '../../../ReUsable/InputField/InputField'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'

const Medical = () => {
    const [medical, setMedical] = useState('')
    const arr = []
    return (
        <div>
            <InputField text={medical} setText={setMedical} label="Medical History" />
            {medical.length !== 0 ? <Suggestion arr={arr} setText={setMedical} /> : null}
        </div>
    )
}

export default Medical
