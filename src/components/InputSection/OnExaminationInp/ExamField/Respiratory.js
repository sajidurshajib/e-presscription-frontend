import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Respiratory = ({ setData }) => {
    const [respiratory, setRespiratory] = useState({ key: 'respiratory', unit: 'breaths/min', slot_int1: 0 })
    useEffect(() => {
        if (respiratory.slot_int1 !== 0 && respiratory.slot_int1 !== '') {
            setData({ respiratory })
        }
    }, [respiratory, setData])

    if (respiratory.slot_int1 === 0) {
        setRespiratory({ ...respiratory, slot_int1: '' })
    }

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap2}>
                <p>Respiratory rate:</p>
                <input
                    className={classes.onExam}
                    value={respiratory.slot_int1}
                    onChange={(e) => setRespiratory({ ...respiratory, slot_int1: parseInt(e.target.value) })}
                    type="number"
                    required
                />
                <p>breaths/min</p>
            </div>
        </div>
    )
}

export default Respiratory
