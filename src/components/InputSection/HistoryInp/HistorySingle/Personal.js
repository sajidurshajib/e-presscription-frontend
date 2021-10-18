import { useState } from 'react'
import InputField from '../../../ReUsable/InputField/InputField'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'

const Personal = () => {
    const [personal, setPersonal] = useState('')
    const arr = []
    return (
        <div>
            <InputField text={personal} setText={setPersonal} label="Personal History" />
            {personal.length !== 0 ? <Suggestion arr={arr} setText={setPersonal} /> : null}
        </div>
    )
}

export default Personal
