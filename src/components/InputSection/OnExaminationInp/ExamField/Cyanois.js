import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Cyanois = ({ setData }) => {
    const [cyanosis, setCyanosis] = useState({ sign: '-', remark: '' })
    useEffect(() => {
        if (cyanosis.sign === '+') {
            setData({ cyanosis })
        }
    }, [cyanosis, setData])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap1}>
                <p>Cyanosis : </p>
                <select
                    value={cyanosis.sign}
                    onChange={(e) => setCyanosis({ sign: e.target.value, remark: cyanosis.remark })}>
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input
                    value={cyanosis.remark}
                    onChange={(e) => setCyanosis({ sign: cyanosis.sign, remark: e.target.value })}
                    type="text"
                    placeholder="Remark"
                    required
                />
            </div>
        </div>
    )
}

export default Cyanois
