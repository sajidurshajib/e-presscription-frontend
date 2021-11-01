import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Respiratory = ({ setData }) => {
    const [respiratory, setRespiratory] = useState({ respiratory: 0 })
    useEffect(() => {
        if (respiratory.respiratory !== 0) {
            setData(respiratory)
        }
    }, [respiratory, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap2}>
                <p>Respiratory rate:</p>
                <input
                    value={respiratory.respiratory}
                    onChange={(e) => setRespiratory({ respiratory: parseInt(e.target.value) || 0 })}
                    type="number"
                    required
                />
                <p>breaths/min</p>
            </div>
        </div>
    )
}

export default Respiratory
