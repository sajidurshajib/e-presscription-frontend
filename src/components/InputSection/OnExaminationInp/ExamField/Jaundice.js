import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Jaundice = ({ setData }) => {
    const [jaundice, setJaundice] = useState({ sign: '-', remark: '' })
    useEffect(() => {
        if (jaundice.sign === '+') {
            setData({ jaundice })
        }
    }, [jaundice, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap1}>
                <p>Jaundice : </p>
                <select
                    className={classes.selectExam}
                    value={jaundice.sign}
                    onChange={(e) => setJaundice({ sign: e.target.value, remark: jaundice.remark })}>
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input
                    className={classes.onExam}
                    value={jaundice.remark}
                    onChange={(e) => setJaundice({ sign: jaundice.sign, remark: e.target.value })}
                    type="text"
                    placeholder="Remark"
                    required
                />
            </div>
        </div>
    )
}

export default Jaundice
