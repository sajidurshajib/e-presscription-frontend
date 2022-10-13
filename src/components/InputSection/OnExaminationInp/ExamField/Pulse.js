import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Pulse = ({ setData }) => {
    const [pulse, setPulse] = useState({ key: 'pulse', unit: 'beats/min', slot_int1: 0 })

    useEffect(() => {
        if (pulse.slot_int1 !== 0 && pulse.slot_int1 !== '') {
            setData({ pulse })
        }
    }, [pulse, setData])

    if (pulse.slot_int1 === 0) {
        setPulse({ ...pulse, slot_int1: '' })
    }

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap2}>
                <p>Pulse :</p>
                <input
                    className={classes.onExam}
                    value={pulse.slot_int1}
                    onChange={(e) => setPulse({ ...pulse, slot_int1: parseInt(e.target.value) })}
                    type="number"
                    min={0}
                    required
                />
                <p>beats/min</p>
            </div>
        </div>
    )
}
export default Pulse
