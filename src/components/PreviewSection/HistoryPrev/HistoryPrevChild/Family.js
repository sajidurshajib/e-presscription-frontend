import { useState, useContext, Fragment } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const Family = () => {
    const [toggle, setToggle] = useState(true)
    const { stateFamilyHistory, dispatchFamilyHistory } = useContext(History)

    const del = (e) => {
        e.preventDefault()
        dispatchFamilyHistory({ type: 'remove' })
    }

    return (
        <div className={classes.HistoryPrev}>
            {stateFamilyHistory.family.length !== 0 ? (
                <h4
                    className={toggle ? classes.historyChildH : `${classes.historyChildH} ${classes.toggle}`}
                    onClick={() => setToggle(!toggle)}>
                    Family history
                </h4>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {toggle ? (
                <Fragment>
                    {stateFamilyHistory.family.length !== 0 ? (
                        <ul className={classes.historyli}>
                            {stateFamilyHistory.family
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

export default Family
