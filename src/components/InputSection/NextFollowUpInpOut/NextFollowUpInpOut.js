import { useState } from 'react'
import InputNumber from '../../ReUsable/InputNumber/InputNumber'
import classes from './NextFollowUpInpOut.module.css'

const NextFollowUpInpOut = () => {
    const [toggle, setToggle] = useState('date')
    const toggler = () => {
        if (toggle === 'date') {
            setToggle('days')
        }
        if (toggle === 'days') {
            setToggle('date')
        }
    }

    return (
        <div className={classes.NextFollowUpInpOut}>
            <h3>Next Follow up</h3>
            <div>
                {toggle === 'date' ? (
                    <button onClick={toggler}>Change into Days</button>
                ) : (
                    <button onClick={toggler}>Change into Date</button>
                )}
            </div>
            {toggle === 'date' ? (
                <div className={classes.date}>
                    <input type="date" name="" id="" />
                </div>
            ) : null}

            {toggle === 'days' ? (
                <div className={classes.days}>
                    <InputNumber label="After days" />
                </div>
            ) : null}
        </div>
    )
}

export default NextFollowUpInpOut
