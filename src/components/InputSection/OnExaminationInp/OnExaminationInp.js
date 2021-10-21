import { Fragment, useState } from 'react'
import ExamField from './ExamField/ExamField'
import classes from './OnExaminationInp.module.css'

const OnExaminationInp = () => {
    const [more, setMore] = useState(false)
    return (
        <div className={classes.OnExaminationInp}>
            <ExamField name="bloodpressure" />
            <ExamField name="pulse" />
            <ExamField name="temp" />
            <ExamField name="rbs" />
            <ExamField name="heart" />
            <ExamField name="lungs" />
            <ExamField name="weight" />

            {more ? (
                <Fragment>
                    <ExamField name="anaemia" />
                    <ExamField name="jaundice" />
                    <ExamField name="cyanosis" />
                    <ExamField name="heartrate" />
                    <ExamField name="respiratory" />
                    <ExamField name="oedema" />
                    <ExamField name="height" />
                </Fragment>
            ) : null}

            <button onClick={() => setMore(!more)}>See {more ? 'less' : 'more'}</button>
        </div>
    )
}

export default OnExaminationInp
