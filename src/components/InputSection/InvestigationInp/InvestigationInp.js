import { useState, useEffect } from 'react'
import { useContext } from 'react'
import env from 'react-dotenv'
import { Investigation } from '../../../allContext'
import { lastLine } from '../../../utils/Lines'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './InvestigationInp.module.css'

const InvestigationInp = () => {
    const { stateInvestigation, dispatchInvestigation } = useContext(Investigation)

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    const [text, setText] = useState('')
    const [tests, setTests] = useState('')

    const concatSet = (conc) => {
        let lastIndex = text.lastIndexOf('\n')
        let str = text.substring(0, lastIndex + 1)
        let a = str + conc
        setText(a)
    }

    useEffect(() => {
        const funFetch = async () => {
            try {
                const response = await fetch(`${api}/tests?search=${lastLine(text)}&page_size=10`)
                if (response.ok) {
                    const data = await response.json()
                    setTests(data)
                }
            } catch (err) {}
        }
        if (text !== '') {
            funFetch()
        }
    }, [text, setTests, api])

    const submit = (e) => {
        e.preventDefault()
        dispatchInvestigation({
            type: 'input',
            payload:
                stateInvestigation.inv.length !== 0
                    ? stateInvestigation.inv.concat('\n' + text).replace(/\n*$/, '')
                    : text.replace(/\n*$/, ''),
        })
        setText('')
    }

    return (
        <div className={classes.InvestigationInp}>
            <TextField text={text} setText={setText} label="Investigation" />
            {lastLine(text) ? <Suggestion arr={tests} setText={concatSet} /> : null}
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default InvestigationInp
