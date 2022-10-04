import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Temp = ({ setData }) => {
    const [temp, setTemp] = useState({ key: 'temp', unit: 'F', slot_int1: 0 })

    useEffect(() => {
        if (temp.slot_int1 !== 0 && temp.slot_int1 !== '') {
            setData({ temp })
        }
    }, [temp, setData])

    if (temp.slot_int1 === 0) {
        setTemp({ ...temp, slot_int1: '' })
    }

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap3}>
                <p>Temp : </p>
                <input
                    className={classes.onExam}
                    value={temp.slot_int1}
                    onChange={(e) => setTemp({ ...temp, slot_int1: parseInt(e.target.value) })}
                    type="number"
                    required
                />
                <select
                    className={classes.selectExam}
                    value={temp.unit}
                    onChange={(e) => setTemp({ ...temp, unit: e.target.value })}>
                    <option value="F"> &deg; F </option>
                    <option value="C"> &deg; C </option>
                </select>
            </div>
        </div>
    )
}

export default Temp
