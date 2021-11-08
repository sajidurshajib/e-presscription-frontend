import { useContext, Fragment } from 'react'
import { PdfWrapped } from '../../../allContext'
import { undef } from '../../../utils/TypeCheck'
import Anaemia from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Anaemia'
import BloodPressure from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/BloodPressure'
import Bmi from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Bmi'
import Custom from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Custom'
import Cyanosis from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Cyanosis'
import Heart from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Heart'
import HeartRate from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/HeartRate'
import Height from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Height'
import Jaundice from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Jaundice'
import Lungs from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Lungs'
import Oedema from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Oedema'
import Pulse from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Pulse'
import Rbs from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Rbs'
import Respiratory from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Respiratory'
import Temp from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Temp'
import Weight from '../../PreviewSection/OnExaminationPrev/OnExaminationChild/Weight'
import classes from './Generate.module.css'

const OnExam = () => {
    const { stateOnExamination } = useContext(PdfWrapped)

    return (
        <div>
            <h4>O/E :</h4>
            <Fragment>
                <ul className={classes.OnExamUl}>
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
        </div>
    )
}

export default OnExam
