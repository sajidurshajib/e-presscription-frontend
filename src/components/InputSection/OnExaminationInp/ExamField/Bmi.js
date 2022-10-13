import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Bmi = ({ setData }) => {
    const [bmi, setBmi] = useState({ key: 'bmi', unit: 'kg/m²', slot_flt4: 0 })
    useEffect(() => {
        if (bmi.slot_flt4 !== 0 && bmi.slot_flt4 !== '') {
            setData({ bmi })
        }
    }, [bmi, setData])

    if (bmi.slot_flt4 === 0) {
        setBmi({ ...bmi, slot_flt4: '' })
    }

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap}>
                <p>BMI :</p>
                <input
                    className={classes.onExam}
                    value={bmi.slot_flt4}
                    onChange={(e) => setBmi({ ...bmi, slot_flt4: parseFloat(e.target.value) })}
                    type="number"
                    placeholder="kg/m²"
                    required
                />
            </div>
        </div>
    )
}

export default Bmi
