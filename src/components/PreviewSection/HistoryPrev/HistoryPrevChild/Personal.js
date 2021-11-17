import { useState, useContext, Fragment } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const Personal = () => {
    const [toggle, setToggle] = useState(true)
    const { statePersonalHistory, dispatchPersonalHistory } = useContext(History)

    const del = (e) => {
        e.preventDefault()
        dispatchPersonalHistory({ type: 'remove' })
    }

    return (
        <div className={classes.HistoryPrev}>
            {statePersonalHistory.personal.length !== 0 ? (
                <h4
                    className={toggle ? classes.historyChildH : `${classes.historyChildH} ${classes.toggle}`}
                    onClick={() => setToggle(!toggle)}>
                    Personal history
                </h4>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
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
