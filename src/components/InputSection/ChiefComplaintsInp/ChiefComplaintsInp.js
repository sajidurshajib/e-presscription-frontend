import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ChiefComplaints } from '../../../allContext'
import { lastLine } from '../../../utils/Lines'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './ChiefComplaintsInp.module.css'

const ChiefComplaintsInp = () => {
    const { stateChief, dispatchChief } = useContext(ChiefComplaints)

    const [text, setText] = useState('')
    const [cc, setCc] = useState([])

    const concatSet = (conc) => {
        let lastIndex = text.lastIndexOf('\n')
        let str = text.substring(0, lastIndex + 1)
        let a = str + conc
        setText(a)
    }

    // Fetch
    useEffect(() => {
        const funFetch = async () => {
            try {
                const response = await fetch(`/ccs?search=${lastLine(text)}&page_size=10`)
                if (response.ok) {
                    const data = await response.json()
                    const formatedData = data.map(({ cc, id }) => ({ name: cc, id }))
                    setCc(formatedData)
                }
            } catch (err) {}
        }
        if (lastLine(text)) {
            funFetch()
        }
    }, [text, cc, setCc])

    const submit = (e) => {
        e.preventDefault()
        dispatchChief({
            type: 'input',
            payload: stateChief.cc === [] ? text : stateChief.cc.concat('\n' + text),
        })
        setText('')
    }

    // Return
    return (
        <div className={classes.ChiefComplaintsInp}>
            <TextField text={text} setText={setText} label="Chief Complaints" />

            {lastLine(text) ? <Suggestion arr={cc} setText={concatSet} /> : null}
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default ChiefComplaintsInp
