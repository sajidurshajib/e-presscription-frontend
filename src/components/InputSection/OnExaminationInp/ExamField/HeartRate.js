import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const HeartRate = ({ setData }) => {
    const [heartRate, setHeartRate] = useState({ key: 'heartRate', unit: 'beats/min', slot_int1: 0 })
    useEffect(() => {
        if (heartRate.slot_int1 !== 0 && heartRate.slot_int1 !== '') {
            setData({ heartRate })
        }
    }, [heartRate, setData])

    if (heartRate.slot_int1 === 0) {
        setHeartRate({ ...heartRate, slot_int1: '' })
    }

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap2}>
                <p>Heart rate:</p>
                <input
                    className={classes.onExam}
                    value={heartRate.slot_int1}
                    onChange={(e) => setHeartRate({ ...heartRate, slot_int1: parseInt(e.target.value) })}
                    type="number"
                    required
                />
                <p>beats/min</p>
            </div>
        </div>
    )
}

export default HeartRate
