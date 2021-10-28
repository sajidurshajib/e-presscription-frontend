import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Height = ({ setData }) => {
    const [height, setHeight] = useState({ feet: 0, inch: 0 })
    const m = (height.feet * 12 + height.inch) / 39.37

    const meter = Math.floor(m * 100) / 100

    useEffect(() => {
        if (height.feet !== 0 && height.inch !== 0) {
            setData({ height })
        }
    }, [height])

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap5}>
                <p>Height : </p>
                <input
                    value={height.feet}
                    onChange={(e) => setHeight({ feet: parseInt(e.target.value), inch: height.inch })}
                    type="number"
                    required
                />
                <p>Feet</p>
                <input
                    value={height.inch}
                    onChange={(e) => setHeight({ feet: height.feet, inch: parseInt(e.target.value) })}
                    type="number"
                    required
                />
                <p>Inch</p>
                <p>{meter ? '= ' + meter.toFixed(2) + ' Meter' : null}</p>
            </div>
        </div>
    )
}

export default Height
