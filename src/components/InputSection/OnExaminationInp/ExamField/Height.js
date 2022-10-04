import { useState, useEffect } from 'react'
import classes from './ExamField.module.css'

const Height = ({ setData }) => {
    const [height, setHeight] = useState({ key: 'height', unit: 'feet-inch', slot_int1: 0, slot_int2: 0 })
    // const m = (height.slot_int1 * 12 + height.slot_int2) / 39.37

    // const meter = Math.floor(m * 100) / 100

    useEffect(() => {
        if (height.feet !== 0 && height.inch !== 0 && height.slot_int1 !== '' && height.slot_int2 !== '') {
            setData({ height })
        }
    }, [height, setData])

    if (height.slot_int1 === 0) {
        setHeight({ ...height, slot_int1: '' })
    }

    if (height.slot_int2 === 0) {
        setHeight({ ...height, slot_int2: '' })
    }

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap5}>
                <p>Height : </p>
                <input
                    className={classes.onExam}
                    value={height.slot_int1}
                    onChange={(e) => setHeight({ ...height, slot_int1: parseInt(e.target.value) })}
                    type="number"
                    min={0}
                    required
                />
                <p>Feet</p>
                <input
                    className={classes.onExam}
                    value={height.slot_int2}
                    onChange={(e) => setHeight({ ...height, slot_int2: parseInt(e.target.value) })}
                    type="number"
                    min={0}
                    required
                />
                <p>Inch</p>
                {/* <p>{meter ? '= ' + meter.toFixed(2) + ' Meter' : null}</p> */}
            </div>
        </div>
    )
}

export default Height
