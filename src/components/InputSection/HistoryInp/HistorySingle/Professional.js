import { useState } from 'react'
import InputField from '../../../ReUsable/InputField/InputField'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'

const Professional = () => {
    const [professional, setProfessional] = useState('')
    const arr = []
    return (
        <div>
            <InputField text={professional} setText={setProfessional} label="Personal History" />
            {professional.length !== 0 ? <Suggestion arr={arr} setText={setProfessional} /> : null}
        </div>
    )
}

export default Professional
