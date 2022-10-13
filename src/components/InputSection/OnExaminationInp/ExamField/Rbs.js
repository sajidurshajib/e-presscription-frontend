import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Rbs = ({ setData }) => {
    const [rbs, setRbs] = useState({ key: 'rbs', unit: 'mmol/L', slot_flt4: 0 })

    useEffect(() => {
        if (rbs.slot_flt4 !== 0 && rbs.slot_flt4 !== '') {
            setData({ rbs })
        }
    }, [rbs, setData])

    if (rbs.slot_flt4 === 0) {
        setRbs({ ...rbs, slot_flt4: '' })
    }

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap2}>
                <p>RBS : </p>
                <input
                    className={classes.onExam}
                    value={rbs.slot_flt4}
                    onChange={(e) => setRbs({ ...rbs, slot_flt4: parseFloat(e.target.value) })}
                    type="number"
                    step="0.01"
                    required
                />
                <p>mmol/L</p>
            </div>
        </div>
    )
}

export default Rbs
