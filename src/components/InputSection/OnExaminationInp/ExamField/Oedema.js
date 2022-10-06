import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Oedema = ({ setData }) => {
    const [oedema, setOedema] = useState({ key: 'oedema', unit: '', slot_str7: '' })
    const [plus, setPlus] = useState('-')
    useEffect(() => {
        if (plus === '+') {
            setData({ oedema })
        }
    }, [plus, oedema, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap1}>
                <p>Oedema : </p>
                <select className={classes.selectExam} value={plus} onChange={(e) => setPlus(e.target.value)}>
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input
                    className={classes.onExam}
                    value={oedema.remark}
                    onChange={(e) => setOedema({ ...oedema, slot_str7: e.target.value })}
                    type="text"
                    placeholder="Remark"
                    required
                />
            </div>
        </div>
    )
}

export default Oedema
