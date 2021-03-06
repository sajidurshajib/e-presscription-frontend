import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Rbs = ({ setData }) => {
    const [rbs, setRbs] = useState({ rbs: 0 })
    useEffect(() => {
        if (rbs.rbs !== 0) {
            setData(rbs)
        }
    }, [rbs, setData])

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap2}>
                <p>RBS : </p>
                <input
                    className={classes.onExam}
                    value={rbs.rbs}
                    onChange={(e) => setRbs({ rbs: parseInt(e.target.value) || 0 })}
                    type="number"
                    required
                />
                <p>mmol/L</p>
            </div>
        </div>
    )
}

export default Rbs
