import { useState, useEffect, useReducer } from 'react'
// import { useContext } from 'react'
// import { Next } from '../../../allContext'
import { nextReducer, nextState } from '../../../reducer/nextReducer'
import InputNumber from '../../ReUsable/InputNumber/InputNumber'
import classes from './NextFollowUpInpOut.module.css'

const NextFollowUpInpOut = () => {
    const [stateNextFollowup, setStateNextFollowup] = useReducer(nextReducer, nextState)

    // const { stateNext, dispatchNext } = useContext(Next)
    const [days, setDays] = useState(0)
    const [weeks, setWeeks] = useState(0)
    const [months, setMonths] = useState(0)
    const [dateString, setDateString] = useState('')

    useEffect(() => {
        const totalDays =
            (isNaN(days) === true ? 0 : days) + (isNaN(weeks) ? 0 : weeks) * 7 + (isNaN(months) ? 0 : months) * 30
        const date = new Date()
        const res = date.setDate(date.getDate() + totalDays)
        const newDate = new Date(res)

        setDateString(newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate())
    }, [days, weeks, months])

    const submitNext = (e) => {
        e.preventDefault()

        if ((isNaN(days) || days === 0) && (isNaN(weeks) || weeks === 0) && (isNaN(months) || months === 0)) {
            setStateNextFollowup({ type: 'input', payload: '' })
        } else {
            setStateNextFollowup({ type: 'input', payload: dateString })
        }

        window.location.reload()
    }

    const del = (e) => {
        e.preventDefault()
        setStateNextFollowup({ type: 'remove' })
    }

    return (
        <div className={classes.NextFollowUpInpOut}>
            <h3>Next Follow up</h3>

            <div className={classes.days}>
                <InputNumber label="Days" setNum={setDays} negetive={false} />
                <InputNumber label="Weeks" setNum={setWeeks} negetive={false} />
                <InputNumber label="Months" setNum={setMonths} negetive={false} />
            </div>
            <button onClick={submitNext}>Set</button>
            <button onClick={(e) => del(e)}>Clear All</button>
            <br />
            {stateNextFollowup.nxt.length !== 0 ? <p className={classes.nextP}>{stateNextFollowup.nxt}</p> : null}
        </div>
    )
}

export default NextFollowUpInpOut
