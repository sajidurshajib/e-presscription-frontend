import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Pulse = ({ setData }) => {
    const [pulse, setPulse] = useState({ pulse: 0 })

    useEffect(() => {
        if (pulse.pulse !== 0) {
            setData(pulse)
        }
    }, [pulse, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap2}>
                <p>Pulse :</p>
                <input
                    value={pulse.pulse}
                    onChange={(e) => setPulse({ pulse: parseInt(e.target.value) })}
                    type="number"
                    required
                />
                <p>beats/min</p>
            </div>
        </div>
    )
}
export default Pulse
