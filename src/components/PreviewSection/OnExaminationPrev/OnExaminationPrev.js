import { useState, Fragment, useContext } from 'react'
import { OnExamination } from '../../../allContext'
import { undef } from '../../../utils/TypeCheck'
import classes from './OnExaminationPrev.module.css'

const OnExaminationPrev = () => {
    const [toggle, setToggle] = useState(false)
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
                        {undef(stateOnExamination.onexam.bloodPressure.systolic) ? (
                            <li>
                                BP <span>{stateOnExamination.onexam.bloodPressure.systolic}</span>
                            </li>
                        ) : null}
                        <li>
                            BP <span>: 83</span>
                        </li>
                        <li>
                            Pulse <span>: 80</span>
                        </li>
                        <li>
                            Temp <span>: 98</span>
                        </li>
                    </ul>
                </Fragment>
            ) : null}
        </div>
    )
}

export default OnExaminationPrev
