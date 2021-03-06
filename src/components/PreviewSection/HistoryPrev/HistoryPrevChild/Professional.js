import { Fragment, useState, useContext } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const Professional = () => {
    const [toggle, setToggle] = useState(true)
    const { stateProfessionalHistory, dispatchProfessionalHistory } = useContext(History)

    const del = (e) => {
        e.preventDefault()
        dispatchProfessionalHistory({ type: 'remove' })
    }

    return (
        <div className={classes.HistoryPrev}>
            {stateProfessionalHistory.professional.length !== 0 ? (
                <h4
                    className={toggle ? classes.historyChildH : `${classes.historyChildH} ${classes.toggle}`}
                    onClick={() => setToggle(!toggle)}>
                    Professional history
                </h4>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {toggle ? (
                <Fragment>
                    {stateProfessionalHistory.professional.length !== 0 ? (
                        <ul className={classes.historyli}>
                            {stateProfessionalHistory.professional
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

export default Professional
