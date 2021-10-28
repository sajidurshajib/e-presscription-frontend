import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Bmi = ({ setData }) => {
    const [bmi, setBmi] = useState({ bmi: '' })
    useEffect(() => {
        if (bmi.bmi.length !== 0) {
            setData(bmi)
        }
    }, [bmi])
    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap}>
                <p>BMI :</p>
                <input
                    value={bmi.bmi}
                    onChange={(e) => setBmi({ bmi: e.target.value })}
                    type="text"
                    placeholder="kg/m²"
                    required
                />
            </div>
        </div>
    )
}

export default Bmi
