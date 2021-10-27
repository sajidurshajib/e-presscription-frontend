import { useState, useContext, Fragment } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const Personal = () => {
    const [toggle, setToggle] = useState(true)
    const { statePersonalHistory } = useContext(History)
    return (
        <div className={classes.HistoryPrev}>
            {statePersonalHistory.personal.length !== 0 ? (
                <h4
                    className={toggle ? classes.historyChildH : `${classes.historyChildH} ${classes.toggle}`}
                    onClick={() => setToggle(!toggle)}>
                    Personal history
                </h4>
            ) : null}
            {toggle ? (
                <Fragment>
                    {statePersonalHistory.personal.length !== 0 ? (
                        <ul className={classes.historyli}>
                            {statePersonalHistory.personal
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

export default Personal
