import { useState, useContext, Fragment } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const Medical = () => {
    const [toggle, setToggle] = useState(true)
    const { stateMedicalHistory, dispatchMedicalHistory } = useContext(History)

    const del = (e) => {
        e.preventDefault()
        dispatchMedicalHistory({ type: 'remove' })
    }

    return (
        <div className={classes.HistoryPrev}>
            {stateMedicalHistory.medical.length !== 0 ? (
                <h4
                    className={toggle ? classes.historyChildH : `${classes.historyChildH} ${classes.toggle}`}
                    onClick={() => setToggle(!toggle)}>
                    Medical history
                </h4>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {toggle ? (
                <Fragment>
                    {stateMedicalHistory.medical.length !== 0 ? (
                        <ul className={classes.historyli}>
                            {stateMedicalHistory.medical
                                .replace(/\n+$/, '')
                                .split('\n')
                                .map((v, i) => {
                                    return <li key={i}>{v}</li>
                                })}
                        </ul>
                    ) : null}
                </Fragment>
            ) : null}
        </div>
    )
}

export default Medical
