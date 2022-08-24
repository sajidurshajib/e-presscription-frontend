import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ChiefComplaints } from '../../../allContext'
import { lastLine } from '../../../utils/Lines'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import TextField from '../../ReUsable/TextField/TextField'
import ToolTip from '../../ReUsable/ToolTip/ToolTip'
import classes from './ChiefComplaintsInp.module.css'

const ChiefComplaintsInp = () => {
    const { stateChief, dispatchChief } = useContext(ChiefComplaints)

    const apiV1 = process.env.REACT_APP_API_V1

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
                const response = await fetch(`${apiV1}/chief-complaints/?search_str=${lastLine(text)}&skip=0&limit=10`)
                if (response.ok) {
                    const data = await response.json()
                    const formatedData = data.map(({ chief_complaints, id }) => ({ name: chief_complaints, id }))
                    setCc(formatedData)
                }
            } catch (err) {}
        }
        if (lastLine(text)) {
            funFetch()
        }
    }, [text, setCc, apiV1])

    const submit = (e) => {
        e.preventDefault()
        dispatchChief({
            type: 'input',
            payload: stateChief.cc.length === 0 ? text : stateChief.cc.concat('\n' + text),
        })
        setText('')
    }

    return (
        <div className={classes.ChiefComplaintsInp}>
            <TextField text={text} setText={setText} label="Chief Complaints" />
            <div className={classes.tool}>
                <ToolTip tip="Chief Complaints" />
            </div>

            {lastLine(text) && cc[0]?.name !== lastLine(text) ? <Suggestion arr={cc} setText={concatSet} /> : null}
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default ChiefComplaintsInp
