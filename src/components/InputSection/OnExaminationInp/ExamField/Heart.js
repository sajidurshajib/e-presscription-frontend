import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Heart = ({ setData }) => {
    const [heart, setHeart] = useState({ key: 'heart', unit: '', slot_str7: '' })
    useEffect(() => {
        if (heart.slot_str7.length !== 0) {
            setData({ heart })
        }
    }, [heart, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap}>
                <p>Heart :</p>
                <input
                    className={classes.onExam}
                    value={heart.slot_str7}
                    onChange={(e) => setHeart({ ...heart, slot_str7: e.target.value })}
                    type="text"
                    required
                />
            </div>
        </div>
    )
}

export default Heart
