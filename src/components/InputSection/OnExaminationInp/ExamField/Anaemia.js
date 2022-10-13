import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Anaemia = ({ setData }) => {
    const [anaemia, setAnaemia] = useState({ key: 'anaemia', unit: '', slot_str7: '' })
    const [plus, setPlus] = useState('-')

    useEffect(() => {
        if (plus === '+') {
            setData({ anaemia })
        }
    }, [plus, anaemia, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap1}>
                <p>Anaemia : </p>
                <select className={classes.selectExam} value={plus} onChange={(e) => setPlus(e.target.value)}>
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input
                    className={classes.onExam}
                    value={anaemia.remark}
                    onChange={(e) => setAnaemia({ ...anaemia, slot_str7: e.target.value })}
                    type="text"
                    placeholder="Remark"
                    required
                />
            </div>
        </div>
    )
}

export default Anaemia
