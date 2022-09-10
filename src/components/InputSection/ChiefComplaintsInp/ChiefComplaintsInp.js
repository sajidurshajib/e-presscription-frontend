import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ChiefComplaints } from '../../../allContext'
import { getFromAPI } from '../../../api'
import { lastLine } from '../../../utils/Lines'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import TextField from '../../ReUsable/TextField/TextField'
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
        if (lastLine(text)) {
            let apiEndPoint = `${apiV1}/chief-complaints/?search_str=${lastLine(text)}&skip=0&limit=10`
            getFromAPI(apiEndPoint)
                .then((data) => {
                    const formatedData = data.map(({ chief_complaints, id }) => ({ name: chief_complaints, id }))
                    setCc(formatedData)
                })
                .catch((e) => {})
        }
    }, [text, setCc, apiV1])

    const submit = (e) => {
        e.preventDefault()
        dispatchChief({
            type: 'input',
            payload: stateChief.cc.length === 0 ? text : stateChief.cc.concat('\n' + text),
        })
        setText('')
        window.location.reload()
    }

    return (
        <div className={classes.ChiefComplaintsInp}>
            <TextField text={text} setText={setText} label="Chief Complaints" />

            {lastLine(text) && cc[0]?.name !== lastLine(text) ? <Suggestion arr={cc} setText={concatSet} /> : null}
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default ChiefComplaintsInp
