import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Lungs = ({ setData }) => {
    const [lungs, setLungs] = useState({ key: 'lungs', unit: '', slot_str7: '' })
    useEffect(() => {
        if (lungs.slot_str7.length !== 0) {
            setData({ lungs })
        }
    }, [lungs, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap}>
                <p>Lungs :</p>
                <input
                    className={classes.onExam}
                    value={lungs.slot_str7}
                    onChange={(e) => setLungs({ ...lungs, slot_str7: e.target.value })}
                    type="text"
                    required
                />
            </div>
        </div>
    )
}

export default Lungs
