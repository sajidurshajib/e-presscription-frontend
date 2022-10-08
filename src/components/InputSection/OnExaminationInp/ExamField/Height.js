import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Height = ({ setData }) => {
    const [feet, setFeet] = useState(0)
    const [inch, setInch] = useState(0)

    useEffect(() => {
        if (feet !== 0 && inch !== 0) {
            setData({ height: { key: 'height', unit: 'inch', slot_int1: feet * 12 + inch } })
        }
    }, [feet, inch, setData])

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap5}>
                <p>Height : </p>
                <input
                    className={classes.onExam}
                    value={feet}
                    onChange={(e) => setFeet(parseInt(e.target.value))}
                    type="number"
                    min={0}
                    required
                />
                <p>Feet</p>
                <input
                    className={classes.onExam}
                    value={inch}
                    onChange={(e) => setInch(parseInt(e.target.value))}
                    type="number"
                    min={0}
                    required
                />
                <p>Inch</p>
            </div>
        </div>
    )
}

export default Height
