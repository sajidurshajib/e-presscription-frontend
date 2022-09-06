import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Investigation } from '../../../allContext'
import { getFromAPI } from '../../../api'
import { lastLine } from '../../../utils/Lines'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './InvestigationInp.module.css'

const InvestigationInp = () => {
    const { stateInvestigation, dispatchInvestigation } = useContext(Investigation)

    const apiV1 = process.env.REACT_APP_API_V1

    const [text, setText] = useState('')
    const [inv, setInv] = useState('')

    const concatSet = (conc) => {
        let lastIndex = text.lastIndexOf('\n')
        let str = text.substring(0, lastIndex + 1)
        let a = str + conc
        setText(a)
    }

    // Fetch
    useEffect(() => {
        if (text !== '') {
            getFromAPI(`${apiV1}/investigations/?search_str=${lastLine(text)}&skip=0&limit=10`)
                .then((data) => {
                    const formatedData = data.map(({ investigation, id }) => ({ name: investigation, id }))
                    setInv(formatedData)
                })
                .catch((e) => {})
        }
    }, [text, setInv, apiV1])

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
            {lastLine(text) && lastLine(text) !== inv[0]?.name ? <Suggestion arr={inv} setText={concatSet} /> : null}
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default InvestigationInp
