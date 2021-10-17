import { useState, useContext, Fragment } from 'react'
import { Diagnosis } from '../../../allContext'
import classes from './DiagnosisPrev.module.css'

const DiagnosisPrev = () => {
    const [toggle, setToggle] = useState(true)

    const { stateDiagnosis } = useContext(Diagnosis)

    return (
        <div className={classes.DiagnosisPrev}>
            {stateDiagnosis.probable.length !== 0 || stateDiagnosis.confirmatory.length !== 0 ? (
                <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                    Diagnosis
                </h3>
            ) : null}
            {toggle ? (
                <Fragment>
                    <div className={classes.diagnosis}>
                        {stateDiagnosis.probable.length !== 0 ? (
                            <div className={classes.probable}>
                                <h4>Probable Dx</h4>
                                <p>{stateDiagnosis.probable}</p>
                            </div>
                        ) : null}

                        {stateDiagnosis.confirmatory.length !== 0 ? (
                            <div className={classes.confirmatory}>
                                <h4>Confirmatory Dx</h4>
                                <p>{stateDiagnosis.confirmatory}</p>
                            </div>
                        ) : null}
                    </div>
                </Fragment>
            ) : null}
        </div>
    )
}
export default DiagnosisPrev
