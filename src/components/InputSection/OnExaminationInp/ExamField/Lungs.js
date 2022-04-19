import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Lungs = ({ setData }) => {
    const [lungs, setLungs] = useState({ lungs: '' })
    useEffect(() => {
        if (lungs.lungs.length !== 0) {
            setData(lungs)
        }
    }, [lungs, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap}>
                <p>Lungs :</p>
                <input
                    className={classes.onExam}
                    value={lungs.lungs}
                    onChange={(e) => setLungs({ lungs: e.target.value })}
                    type="text"
                    required
                />
            </div>
        </div>
    )
}

export default Lungs
