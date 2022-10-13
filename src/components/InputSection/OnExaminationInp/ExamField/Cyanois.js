import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Cyanois = ({ setData }) => {
    const [cyanosis, setCyanosis] = useState({ key: 'cyanosis', unit: '', slot_str7: '' })
    const [plus, setPlus] = useState('-')
    useEffect(() => {
        if (plus === '+') {
            setData({ cyanosis })
        }
    }, [plus, cyanosis, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap1}>
                <p>Cyanosis : </p>
                <select className={classes.selectExam} value={plus} onChange={(e) => setPlus(e.target.value)}>
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input
                    className={classes.onExam}
                    value={cyanosis.remark}
                    onChange={(e) => setCyanosis({ ...cyanosis, slot_str7: e.target.value })}
                    type="text"
                    placeholder="Remark"
                    required
                />
            </div>
        </div>
    )
}

export default Cyanois
