import { useState, useEffect } from 'react'
import { lastLine } from '../../../utils/Lines'
import Suggestion from '../../ReUsable/Suggestion/Suggestion'
import TextField from '../../ReUsable/TextField/TextField'
import classes from './AdviceInpOut.module.css'
import AdvicePrev from './AdvicePrev/AdvicePrev'

const AdviceInpOut = () => {
    const [text, setText] = useState('')
    const [advice, setAdvice] = useState('')

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
                const response = await fetch(`/advices?search=${lastLine(text)}&page_size=10`)
                if (response.ok) {
                    const data = await response.json()
                    const formatedData = data.map(({ advice, id }) => ({ name: advice, id }))
                    setAdvice(formatedData)
                }
            } catch (err) {}
        }
        if (lastLine(text)) {
            funFetch()
        }
    }, [text, setAdvice])

    //Return
    return (
        <div className={classes.AdviceInpOut}>
            <div className={classes.wrap}>
                <TextField text={text} setText={setText} label="Advice" />

                {lastLine(text) ? <Suggestion arr={advice} setText={concatSet} /> : null}
                <AdvicePrev advice={text} />
            </div>
        </div>
    )
}

export default AdviceInpOut
