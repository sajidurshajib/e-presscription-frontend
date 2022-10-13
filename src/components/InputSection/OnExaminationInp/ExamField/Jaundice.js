import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Jaundice = ({ setData }) => {
    const [jaundice, setJaundice] = useState({ key: 'jaundice', unit: '', slot_str7: '' })
    const [plus, setPlus] = useState('-')
    useEffect(() => {
        if (plus === '+') {
            setData({ jaundice })
        }
    }, [plus, jaundice, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap1}>
                <p>Jaundice : </p>
                <select className={classes.selectExam} value={plus} onChange={(e) => setPlus(e.target.value)}>
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input
                    className={classes.onExam}
                    value={jaundice.remark}
                    onChange={(e) => setJaundice({ ...jaundice, slot_str7: e.target.value })}
                    type="text"
                    placeholder="Remark"
                    required
                />
            </div>
        </div>
    )
}

export default Jaundice
