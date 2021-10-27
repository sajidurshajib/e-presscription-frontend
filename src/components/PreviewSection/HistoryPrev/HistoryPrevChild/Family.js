import { useState, useContext, Fragment } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const Family = () => {
    const [toggle, setToggle] = useState(true)
    const { stateFamilyHistory } = useContext(History)
    return (
        <div className={classes.HistoryPrev}>
            {stateFamilyHistory.family.length !== 0 ? (
                <h4
                    className={toggle ? classes.historyChildH : `${classes.historyChildH} ${classes.toggle}`}
                    onClick={() => setToggle(!toggle)}>
                    Family history
                </h4>
            ) : null}
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
