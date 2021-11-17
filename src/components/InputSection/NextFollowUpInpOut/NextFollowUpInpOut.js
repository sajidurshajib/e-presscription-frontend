import { useState } from 'react'
import { useContext } from 'react'
import { Next } from '../../../allContext'
import InputNumber from '../../ReUsable/InputNumber/InputNumber'
import classes from './NextFollowUpInpOut.module.css'

const NextFollowUpInpOut = () => {
    const { stateNext, dispatchNext } = useContext(Next)
    const [days, setDays] = useState(0)
    const [weeks, setWeeks] = useState(0)
    const [months, setMonths] = useState(0)

    const numCheck = (num) => {
        if (num > 1) {
            return 's '
        } else {
            return ' '
        }
    }

    const submitNext = (e) => {
        e.preventDefault()

        let n = `${months !== 0 ? months + ' month' + numCheck(months) : ''}${
            weeks !== 0 ? weeks + ' week' + numCheck(weeks) : ''
        }${days !== 0 ? days + ' day' + numCheck(days) : ''}`

        dispatchNext({ type: 'input', payload: n })
    }

    const del = (e) => {
        e.preventDefault()
        dispatchNext({ type: 'remove' })
    }

    return (
        <div className={classes.NextFollowUpInpOut}>
            <h3>Next Follow up</h3>

            <div className={classes.days}>
                <InputNumber label="Days" setNum={setDays} />
                <InputNumber label="Weeks" setNum={setWeeks} />
                <InputNumber label="Months" setNum={setMonths} />
            </div>
            <button onClick={submitNext}>Set</button>
            <button onClick={(e) => del(e)}>Clear All</button>
            <br />
            {stateNext.nxt.length !== 0 ? <p className={classes.nextP}>{stateNext.nxt}</p> : null}
        </div>
    )
}

export default NextFollowUpInpOut
