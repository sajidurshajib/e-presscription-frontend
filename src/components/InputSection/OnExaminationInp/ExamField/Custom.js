import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Custom = ({ setData }) => {
    const [custom, setCustom] = useState({ key: 'custom', unit: '', slot_str7: '' })
    useEffect(() => {
        if (custom.slot_str7.length) {
            setData({ custom })
        }
    }, [custom, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap}>
                <p>Custom :</p>
                <input
                    className={classes.onExam}
                    value={custom.slot_str7}
                    onChange={(e) => setCustom({ ...custom, slot_str7: e.target.value })}
                    type="text"
                    required
                />
            </div>
        </div>
    )
}

export default Custom
