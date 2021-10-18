import { useState } from 'react'
import InputField from '../../../ReUsable/InputField/InputField'
import Suggestion from '../../../ReUsable/Suggestion/Suggestion'

const Family = () => {
    const [family, setFamily] = useState('')
    const arr = []
    return (
        <div>
            <InputField text={family} setText={setFamily} label="Family History" />
            {family.length !== 0 ? <Suggestion arr={arr} setText={setFamily} /> : null}
        </div>
    )
}

export default Family
