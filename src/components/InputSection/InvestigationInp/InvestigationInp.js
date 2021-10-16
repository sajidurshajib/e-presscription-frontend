import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Investigation } from '../../../allContext'
import InputField from '../../ReUsable/InputField/InputField'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import classes from './InvestigationInp.module.css'

const InvestigationInp = () => {
    const { stateInvestigation, dispatchInvestigation } = useContext(Investigation)

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

    const submit = (e) => {
        e.preventDefault()
        dispatchInvestigation({
            type: 'input',
            payload: stateInvestigation.inv.length === 0 ? [text] : [...stateInvestigation.inv, text],
        })
        setText('')
    }

    return (
        <div className={classes.InvestigationInp}>
            <div className={classes.wrap}>
                <InputField text={text} setText={setText} label="Investigation" />
                {text ? <Suggestion arr={tests} setText={setText} /> : null}
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default InvestigationInp
