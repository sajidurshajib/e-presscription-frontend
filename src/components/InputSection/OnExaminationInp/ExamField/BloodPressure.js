import { useEffect } from 'react'
import { useState } from 'react'
import classes from './ExamField.module.css'

const BloodPressure = ({ setData }) => {
    const [bloodPressure, setBloodPressure] = useState({ diastolic: 0, systolic: 0 })

    useEffect(() => {
        if (bloodPressure.systolic !== 0 && bloodPressure.diastolic !== 0) {
            setData({ bloodPressure })
        }
    }, [bloodPressure, setData])

    return (
        <div className={classes.ExamField}>
            <div className={classes.wrap4}>
                <p>Blood Pressure (BP) :</p>
                <input
                    className={classes.onExam}
                    value={bloodPressure.diastolic}
                    onChange={(e) =>
                        setBloodPressure({ systolic: bloodPressure.systolic, diastolic: parseInt(e.target.value) || 0 })
                    }
                    type="number"
                    placeholder="Diastolic"
                    required
                />
                <span>/</span>
                <input
                    className={classes.onExam}
                    value={bloodPressure.systolic}
                    onChange={(e) =>
                        setBloodPressure({
                            systolic: parseInt(e.target.value) || 0,
                            diastolic: bloodPressure.diastolic,
                        })
                    }
                    type="number"
                    placeholder="Systolic"
                    required
                />

                <p>mm of Hg</p>
            </div>
        </div>
    )
}

export default BloodPressure
