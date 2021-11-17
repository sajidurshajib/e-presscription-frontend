import { Fragment, useContext, useState } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const Drug = () => {
    const [toggle, setToggle] = useState(true)
    const { stateDrugHistory, dispatchDrugHistory } = useContext(History)

    const del = (e) => {
        e.preventDefault()
        dispatchDrugHistory({ type: 'remove' })
    }

    return (
        <div className={classes.HistoryPrev}>
            {stateDrugHistory.drug.length !== 0 ? (
                <h4
                    className={toggle ? classes.historyChildH : `${classes.historyChildH} ${classes.toggle}`}
                    onClick={() => setToggle(!toggle)}>
                    Drug history
                </h4>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {toggle ? (
                <Fragment>
                    {stateDrugHistory.drug.length !== 0 ? (
                        <ul className={classes.historyli}>
                            {stateDrugHistory.drug
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

export default Drug
