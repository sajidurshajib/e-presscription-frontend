import { useState } from 'react'
import classes from './CoMorbidity.module.css'

const CoMorbidity = () => {
    const [htn, setHtn] = useState('')
    return (
        <div className={classes.CoMorbidity}>
            <h3>
                Co-Morbidity <span>Remark</span>
            </h3>
            <div className={classes.wrapper}>
                <div className={classes.check}>
                    <p>Hypertension (HTN)</p>
                    <button>+/-</button>
                    <input type="text" />
                </div>
                <div className={classes.check}>
                    <p>Diabetes (DM)</p>
                    <button>+/-</button>
                    <input type="text" />
                </div>
                <div className={classes.check}>
                    <p>Tuberculosis (TB)</p>
                    <button>+/-</button>
                    <input type="text" />
                </div>
                <div className={classes.check}>
                    <p>Asthma</p>
                    <button>+/-</button>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default CoMorbidity
