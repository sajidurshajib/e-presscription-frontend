import ExamField from './ExamField/ExamField'
import classes from './OnExaminationInp.module.css'

const OnExaminationInp = () => {
    // let arr = []
    // let sgg = [
    //     'Anaemia',
    //     'Jaundice',
    //     'Cyanosis',
    //     'Blood Pressure',
    //     'Pulse',
    //     'Heart',
    //     'Lungs',
    //     'Heart rate',
    //     'Respiratory Rate',
    //     'Oedema',
    //     'Hair Distribution',
    //     'Height',
    //     'Weight',
    //     'Temperature',
    // ]

    return (
        <div className={classes.OnExaminationInp}>
            <ExamField name="anaemia" />
            <ExamField name="jaundice" />
            <ExamField name="cyanosis" />
            <ExamField name="bloodpressure" />
            <ExamField name="pulse" />
            <ExamField name="heart" />
            <ExamField name="lungs" />
            <ExamField name="heartrate" />
            <ExamField name="respiratory" />
            <ExamField name="odema" />
            <ExamField name="weight" />
            <ExamField name="height" />
            <ExamField name="temp" />
            <ExamField name="rbs" />
        </div>
    )
}

export default OnExaminationInp
