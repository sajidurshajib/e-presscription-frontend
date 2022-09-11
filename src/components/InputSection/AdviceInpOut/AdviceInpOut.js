import { useState, useEffect, useContext } from 'react'
import { Advice } from '../../../allContext'
import { getFromAPI } from '../../../api'
import { lastLine } from '../../../utils/Lines'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './AdviceInpOut.module.css'
import AdvicePrev from './AdvicePrev/AdvicePrev'

const AdviceInpOut = () => {
    const [text, setText] = useState('')
    const [advice, setAdvice] = useState('')

    const { stateAdvice, dispatchAdvice } = useContext(Advice)

    const apiV1 = process.env.REACT_APP_API_V1

    const concatSet = (conc) => {
        let lastIndex = text.lastIndexOf('\n')
        let str = text.substring(0, lastIndex + 1)
        let a = str + conc
        setText(a)
    }

    // Fetch
    useEffect(() => {
        if (lastLine(text)) {
            getFromAPI(`${apiV1}/advices/?search_str=${lastLine(text)}&skip=0&limit=10`).then((data) => {
                const formatedData = data.map(({ advice, id }) => ({ name: advice, id }))
                setAdvice(formatedData)
            })
        }
    }, [text, setAdvice, apiV1])

    const adviceSubmit = (e) => {
        e.preventDefault()
        if (text.length !== 0) {
            dispatchAdvice({
                type: 'input',
                payload:
                    stateAdvice.adv.length !== 0
                        ? stateAdvice.adv.concat('\n' + text).replace(/\n*$/, '')
                        : text.replace(/\n*$/, ''),
            })
            setText('')
            window.location.reload()
        }
    }

    //Return
    return (
        <div className={classes.AdviceInpOut}>
            <div className={classes.wrap}>
                <TextField text={text} setText={setText} label="Advice" />

                {lastLine(text) && lastLine(text) !== advice[0]?.name ? (
                    <Suggestion arr={advice} setText={concatSet} />
                ) : null}
                <button onClick={adviceSubmit}>Submit</button>

                <AdvicePrev advice={stateAdvice.adv} dispatchAdv={dispatchAdvice} />
            </div>
        </div>
    )
}

export default AdviceInpOut
