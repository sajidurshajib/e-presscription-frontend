import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Weight = ({ setData }) => {
    const [weight, setWeight] = useState({ value: 0, type: 'kg' })
    useEffect(() => {
        if (weight.value !== 0) {
            setData({ weight })
        }
    }, [weight, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap3}>
                <p>Weight : </p>
                <input
                    className={classes.onExam}
                    value={weight.value}
                    onChange={(e) => setWeight({ value: parseInt(e.target.value) || 0, type: weight.type })}
                    type="number"
                    required
                />
                <select className={classes.selectExam}>
                    <option value="kg"> kg </option>
                    <option value="lbs"> lbs </option>
                </select>
            </div>
        </div>
    )
}

export default Weight
