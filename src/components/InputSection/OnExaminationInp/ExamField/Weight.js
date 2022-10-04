import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Weight = ({ setData }) => {
    const [weight, setWeight] = useState({ key: 'weight', unit: 'kg', slot_flt4: 0 })
    useEffect(() => {
        if (weight.slot_flt4 !== 0 && weight.slot_flt4 !== '') {
            setData({ weight })
        }
    }, [weight, setData])

    if (weight.slot_flt4 === 0) {
        setWeight({ ...weight, slot_flt4: '' })
    }

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap3}>
                <p>Weight : </p>
                <input
                    className={classes.onExam}
                    value={weight.slot_flt4}
                    onChange={(e) => setWeight({ ...weight, slot_flt4: parseFloat(e.target.value) })}
                    type="number"
                    step="0.1"
                    required
                />
                <select
                    className={classes.selectExam}
                    value={weight.unit}
                    onChange={(e) => setWeight({ ...weight, unit: e.target.value })}>
                    <option value="kg"> kg </option>
                    <option value="lbs"> lbs </option>
                </select>
            </div>
        </div>
    )
}

export default Weight
