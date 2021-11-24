import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ChiefComplaints } from '../../../allContext'
import { lastLine } from '../../../utils/Lines'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import TextField from '../../ReUsable/TextField/TextField'
import ToolTip from '../../ReUsable/ToolTip/ToolTip'
import classes from './ChiefComplaintsInp.module.css'
import { base_url } from '../../../config'
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
                console.log(`Should send request to ${base_url}/ccs?search=${lastLine(text)}&page_size=10`)
                const response = await fetch(`${base_url}/ccs?search=${lastLine(text)}&page_size=10`)
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
    }, [text, setCc])

    const submit = (e) => {
        e.preventDefault()
        dispatchChief({
            type: 'input',
            payload: stateChief.cc.length === 0 ? text : stateChief.cc.concat('\n' + text),
        })
        setText('')
    }

    // Return
    return (
        <div className={classes.ChiefComplaintsInp}>
            <TextField text={text} setText={setText} label="Chief Complaints" />
            <div className={classes.tool}>
                <ToolTip tip="Chief Complaints lorem ipsu dolor sit amet" />
            </div>

            {lastLine(text) ? <Suggestion arr={cc} setText={concatSet} /> : null}
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default ChiefComplaintsInp
