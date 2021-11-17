import { useState, Fragment, useContext } from 'react'
import { OnExamination } from '../../../allContext'
import { undef } from '../../../utils/TypeCheck'
import Anaemia from './OnExaminationChild/Anaemia'
import BloodPressure from './OnExaminationChild/BloodPressure'
import Bmi from './OnExaminationChild/Bmi'
import Custom from './OnExaminationChild/Custom'
import Cyanosis from './OnExaminationChild/Cyanosis'
import Heart from './OnExaminationChild/Heart'
import HeartRate from './OnExaminationChild/HeartRate'
import Height from './OnExaminationChild/Height'
import Jaundice from './OnExaminationChild/Jaundice'
import Lungs from './OnExaminationChild/Lungs'
import Oedema from './OnExaminationChild/Oedema'
import Pulse from './OnExaminationChild/Pulse'
import Rbs from './OnExaminationChild/Rbs'
import Respiratory from './OnExaminationChild/Respiratory'
import Temp from './OnExaminationChild/Temp'
import Weight from './OnExaminationChild/Weight'
import classes from './OnExaminationPrev.module.css'

const OnExaminationPrev = () => {
    const [toggle, setToggle] = useState(true)
    const { stateOnExamination, dispatchOnExamination } = useContext(OnExamination)

    const del = (e) => {
        e.preventDefault()
        dispatchOnExamination({ type: 'remove' })
    }

    return (
        <div className={classes.OnExaminationPrev}>
            {stateOnExamination.onexam.length !== 0 ? (
                <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                    On-Examination
                </h3>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {toggle ? (
                <Fragment>
                    <ul>
                        {/* Blood Pressure preview */}
                        {!undef(stateOnExamination.onexam.bloodPressure) ? (
                            <li>
                                <BloodPressure bp={stateOnExamination.onexam.bloodPressure} />
                            </li>
                        ) : null}

                        {/* Pulse preview */}
                        {!undef(stateOnExamination.onexam.pulse) ? (
                            <li>
                                <Pulse pulse={stateOnExamination.onexam.pulse} />
                            </li>
                        ) : null}

                        {/* Temp preview */}
                        {!undef(stateOnExamination.onexam.temp) ? (
                            <li>
                                <Temp temp={stateOnExamination.onexam.temp} />
                            </li>
                        ) : null}

                        {/* RBS preview */}
                        {!undef(stateOnExamination.onexam.rbs) ? (
                            <li>
                                <Rbs rbs={stateOnExamination.onexam.rbs} />
                            </li>
                        ) : null}

                        {/* Heart preview */}
                        {!undef(stateOnExamination.onexam.heart) ? (
                            <li>
                                <Heart heart={stateOnExamination.onexam.heart} />
                            </li>
                        ) : null}

                        {/* Lungs preview */}
                        {!undef(stateOnExamination.onexam.lungs) ? (
                            <li>
                                <Lungs lungs={stateOnExamination.onexam.lungs} />
                            </li>
                        ) : null}

                        {/* Weight preview */}
                        {!undef(stateOnExamination.onexam.weight) ? (
                            <li>
                                <Weight weight={stateOnExamination.onexam.weight} />
                            </li>
                        ) : null}

                        {/* Anaemia preview */}
                        {!undef(stateOnExamination.onexam.anaemia) ? (
                            <li>
                                <Anaemia anaemia={stateOnExamination.onexam.anaemia} />
                            </li>
                        ) : null}

                        {/* Jaundice preview */}
                        {!undef(stateOnExamination.onexam.jaundice) ? (
                            <li>
                                <Jaundice jaundice={stateOnExamination.onexam.jaundice} />
                            </li>
                        ) : null}

                        {/* Cyanosis preview */}
                        {!undef(stateOnExamination.onexam.cyanosis) ? (
                            <li>
                                <Cyanosis cyanosis={stateOnExamination.onexam.cyanosis} />
                            </li>
                        ) : null}

                        {/* HeartRate preview */}
                        {!undef(stateOnExamination.onexam.heartRate) ? (
                            <li>
                                <HeartRate heartRate={stateOnExamination.onexam.heartRate} />
                            </li>
                        ) : null}

                        {/* Respiratory preview */}
                        {!undef(stateOnExamination.onexam.respiratory) ? (
                            <li>
                                <Respiratory respiratory={stateOnExamination.onexam.respiratory} />
                            </li>
                        ) : null}

                        {/* Oedema preview */}
                        {!undef(stateOnExamination.onexam.oedema) ? (
                            <li>
                                <Oedema oedema={stateOnExamination.onexam.oedema} />
                            </li>
                        ) : null}

                        {/* Height preview */}
                        {!undef(stateOnExamination.onexam.height) ? (
                            <li>
                                <Height height={stateOnExamination.onexam.height} />
                            </li>
                        ) : null}

                        {/* BMI preview */}
                        {!undef(stateOnExamination.onexam.bmi) ? (
                            <li>
                                <Bmi bmi={stateOnExamination.onexam.bmi} />
                            </li>
                        ) : null}

                        {/* Custom preview */}
                        {!undef(stateOnExamination.onexam.custom) ? (
                            <li>
                                <Custom custom={stateOnExamination.onexam.custom} />
                            </li>
                        ) : null}
                    </ul>
                </Fragment>
            ) : null}
        </div>
    )
}

export default OnExaminationPrev
