import { Fragment, useContext, useState } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const Vaccination = () => {
    const [toggle, setToggle] = useState(true)
    const { stateVaccinationHistory, dispatchVaccinationHistory } = useContext(History)

    const del = (e) => {
        e.preventDefault()
        dispatchVaccinationHistory({ type: 'remove' })
    }

    return (
        <div className={classes.HistoryPrev}>
            {stateVaccinationHistory.vaccination.length !== 0 ? (
                <h4
                    className={toggle ? classes.historyChildH : `${classes.historyChildH} ${classes.toggle}`}
                    onClick={() => setToggle(!toggle)}>
                    Vaccination history
                </h4>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {toggle ? (
                <Fragment>
                    {stateVaccinationHistory.vaccination.length !== 0 ? (
                        <ul className={classes.historyli}>
                            {stateVaccinationHistory.vaccination
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

export default Vaccination
