import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Temp = ({ setData }) => {
    const [temp, setTemp] = useState({ value: 0, type: 'F' })

    useEffect(() => {
        if (temp.value !== 0) {
            setData({ temp })
        }
    }, [temp, setData])

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap3}>
                <p>Temp : </p>
                <input
                    className={classes.onExam}
                    value={temp.value}
                    onChange={(e) => setTemp({ value: parseInt(e.target.value) || 0, type: temp.type })}
                    type="number"
                    required
                />
                <select
                    className={classes.selectExam}
                    value={temp.type}
                    onChange={(e) => setTemp({ value: temp.value, type: e.target.value })}>
                    <option value="F"> &deg; F </option>
                    <option value="C"> &deg; C </option>
                </select>
            </div>
        </div>
    )
}

export default Temp
