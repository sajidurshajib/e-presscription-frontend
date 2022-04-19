import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Anaemia = ({ setData }) => {
    const [anaemia, setAnaemia] = useState({ sign: '-', remark: '' })
    useEffect(() => {
        if (anaemia.sign === '+') {
            setData({ anaemia })
        }
    }, [anaemia, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap1}>
                <p>Anaemia : </p>
                <select
                    className={classes.selectExam}
                    value={anaemia.sign}
                    onChange={(e) => setAnaemia({ sign: e.target.value, remark: anaemia.remark })}>
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input
                    className={classes.onExam}
                    value={anaemia.remark}
                    onChange={(e) => setAnaemia({ sign: anaemia.sign, remark: e.target.value })}
                    type="text"
                    placeholder="Remark"
                    required
                />
            </div>
        </div>
    )
}

export default Anaemia
