import { useState, useContext, Fragment } from 'react'
import { Diagnosis } from '../../../allContext'
import classes from './DiagnosisPrev.module.css'

const DiagnosisPrev = () => {
    const [toggle, setToggle] = useState(true)
    const { stateDiagnosis, dispatchDiagnosis } = useContext(Diagnosis)

    const del = (e) => {
        e.preventDefault()
        dispatchDiagnosis({ type: 'remove' })
    }

    let prob = stateDiagnosis.probable.split('\n')
    let conf = stateDiagnosis.confirmatory.split('\n')

    return (
        <div className={classes.DiagnosisPrev}>
            {stateDiagnosis.probable.length !== 0 || stateDiagnosis.confirmatory.length !== 0 ? (
                <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                    Diagnosis
                </h3>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {toggle ? (
                <Fragment>
                    <div className={classes.diagnosis}>
                        {stateDiagnosis.probable.length !== 0 ? (
                            <div className={classes.probable}>
                                <h4>Probable Dx</h4>

                                <ol>
                                    {prob.map((v, i) => {
                                        return <li key={i}>{v}</li>
                                    })}
                                </ol>
                            </div>
                        ) : null}

                        {stateDiagnosis.confirmatory.length !== 0 ? (
                            <div className={classes.confirmatory}>
                                <h4>Confirmatory Dx</h4>

                                <ol>
                                    {conf.map((v, i) => {
                                        return <li key={i}>{v}</li>
                                    })}
                                </ol>
                            </div>
                        ) : null}
                    </div>
                </Fragment>
            ) : null}
        </div>
    )
}
export default DiagnosisPrev
