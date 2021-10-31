import { useState, Fragment, useContext } from 'react'
import { OnExamination } from '../../../allContext'
import { undef } from '../../../utils/TypeCheck'
import classes from './OnExaminationPrev.module.css'

const OnExaminationPrev = () => {
    const [toggle, setToggle] = useState(true)
    const { stateOnExamination } = useContext(OnExamination)

    return (
        <div className={classes.OnExaminationPrev}>
            {stateOnExamination.onexam.length !== 0 ? (
                <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                    On-Examination
                </h3>
            ) : null}
            {toggle ? (
                <Fragment>
                    <ul>
                        {/* Blood Pressure preview */}
                        {!undef(stateOnExamination.onexam.bloodPressure) ? (
                            <li>
                                BP <span>{stateOnExamination.onexam.bloodPressure.systolic}</span>
                            </li>
                        ) : null}
                    </ul>
                </Fragment>
            ) : null}
        </div>
    )
}

export default OnExaminationPrev
