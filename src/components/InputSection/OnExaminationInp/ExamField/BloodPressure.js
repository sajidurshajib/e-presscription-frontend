import { useEffect } from 'react'
import { useState } from 'react'
import classes from './ExamField.module.css'

// {
//     "key": "string",
//     "unit": "string",
//     "slot_bool": true,
//     "slot_int1": 0,
//     "slot_int2": 0,
//     "slot_int3": 0,
//     "slot_flt4": 0,
//     "slot_flt5": 0,
//     "slot_flt6": 0,
//     "slot_str7": "string",
//     "slot_str8": "string",
//     "slot_str9": "string"
//   }

const BloodPressure = ({ setData }) => {
    const [bp, setBp] = useState({
        key: 'bp',
        unit: 'mm of Hg',
        slot_int1: 0,
        slot_int2: 0,
    })

    useEffect(() => {
        if (bp.slot_int1 !== 0 && bp.slot_int2 !== 0 && bp.slot_int1 !== '' && bp.slot_int2 !== '') {
            setData({ bp })
        }
    }, [bp, setData])

    if (bp.slot_int1 === 0) {
        setBp({ ...bp, slot_int1: '' })
    }

    if (bp.slot_int2 === 0) {
        setBp({ ...bp, slot_int2: '' })
    }

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap4}>
                <p>Blood Pressure (BP) :</p>
                <input
                    className={classes.onExam}
                    value={bp.slot_int1}
                    onChange={(e) =>
                        setBp({
                            ...bp,
                            slot_int1: parseInt(e.target.value),
                        })
                    }
                    type="number"
                    placeholder="Systolic"
                    min={0}
                    max={300}
                    required
                />
                <span>/</span>
                <input
                    className={classes.onExam}
                    value={bp.slot_int2}
                    onChange={(e) => setBp({ ...bp, slot_int2: parseInt(e.target.value) })}
                    type="number"
                    placeholder="Diastolic"
                    min={0}
                    max={300}
                    required
                />

                <p>mm of Hg</p>
            </div>
        </div>
    )
}

export default BloodPressure
