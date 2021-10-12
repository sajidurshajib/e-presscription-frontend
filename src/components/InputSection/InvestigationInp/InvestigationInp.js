import { useState, useEffect } from 'react'
import InputField from '../../ReUsable/InputField/InputField'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import classes from './InvestigationInp.module.css'

const InvestigationInp = () => {
    const [text, setText] = useState('')
    const [tests, setTests] = useState('')

    useEffect(() => {
        const funFetch = async () => {
            try {
                const response = await fetch(`/tests?search=${text}&page_size=10`)
                if (response.ok) {
                    const data = await response.json()
                    setTests(data)
                }
            } catch (err) {}
        }
        if (text !== '') {
            funFetch()
        }
    }, [text, setTests])

    return (
        <div className={classes.InvestigationInp}>
            <div className={classes.wrap}>
                <InputField text={text} setText={setText} label="Investigation" />
                {text ? <Suggestion arr={tests} setText={setText} /> : null}
            </div>
        </div>
    )
}

export default InvestigationInp
