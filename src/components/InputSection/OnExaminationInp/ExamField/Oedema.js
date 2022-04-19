import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Oedema = ({ setData }) => {
    const [oedema, setOedema] = useState({ sign: '-', remark: '' })
    useEffect(() => {
        if (oedema.sign === '+') {
            setData({ oedema })
        }
    }, [oedema, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap1}>
                <p>Oedema : </p>
                <select
                    className={classes.selectExam}
                    value={oedema.sign}
                    onChange={(e) => setOedema({ sign: e.target.value, remark: oedema.remark })}>
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input
                    className={classes.onExam}
                    value={oedema.remark}
                    onChange={(e) => setOedema({ sign: oedema.sign, remark: e.target.value })}
                    type="text"
                    placeholder="Remark"
                    required
                />
            </div>
        </div>
    )
}

export default Oedema
