import { useState } from 'react'
import InputField from '../../../ReUsable/InputField/InputField'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'

const Drug = () => {
    const [drug, setDrug] = useState('')
    const arr = []
    return (
        <div>
            <InputField text={drug} setText={setDrug} label="Drug History" />
            {drug.length !== 0 ? <Suggestion arr={arr} setText={setDrug} /> : null}
        </div>
    )
}

export default Drug
