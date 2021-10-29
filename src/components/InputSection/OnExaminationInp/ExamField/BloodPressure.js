import { useEffect } from 'react'
import { useState } from 'react'
import classes from './ExamField.module.css'

const BloodPressure = ({ setData }) => {
    const [bloodPressure, setBloodPressure] = useState({ systolic: 0, diastolic: 0 })

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
                    value={bloodPressure.systolic}
                    onChange={(e) =>
                        setBloodPressure({ systolic: parseInt(e.target.value), diastolic: bloodPressure.diastolic })
                    }
                    type="number"
                    placeholder="Systolic"
                    required
                />
                <span>/</span>
                <input
                    value={bloodPressure.diastolic}
                    onChange={(e) =>
                        setBloodPressure({ systolic: bloodPressure.systolic, diastolic: parseInt(e.target.value) })
                    }
                    type="number"
                    placeholder="Diastolic"
                    required
                />
                <p>mm of Hg</p>
            </div>
        </div>
    )
}

export default BloodPressure
