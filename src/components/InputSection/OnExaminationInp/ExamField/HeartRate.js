import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const HeartRate = ({ setData }) => {
    const [heartRate, setHeartRate] = useState({ heartRate: 0 })
    useEffect(() => {
        if (heartRate.heartRate !== 0) {
            setData(heartRate)
        }
    }, [heartRate])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap2}>
                <p>Heart rate:</p>
                <input
                    value={heartRate.heartRate}
                    onChange={(e) => setHeartRate({ heartRate: parseInt(e.target.value) })}
                    type="number"
                    required
                />
                <p>beats/min</p>
            </div>
        </div>
    )
}

export default HeartRate
