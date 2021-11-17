import { useState, useContext, Fragment } from 'react'
import { Investigation } from '../../../allContext'
import classes from './InvestigationPrev.module.css'

const InvestigationPrev = () => {
    const [toggle, setToggle] = useState(true)
    const { stateInvestigation, dispatchInvestigation } = useContext(Investigation)

    const del = (e) => {
        e.preventDefault()
        dispatchInvestigation({ type: 'remove' })
    }

    return (
        <div className={classes.InvestigationPrev}>
            {stateInvestigation.inv.length !== 0 ? (
                <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                    Investigation
                </h3>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {toggle ? (
                <Fragment>
                    <ul>
                        {stateInvestigation.inv.length !== 0
                            ? stateInvestigation.inv.split('\n').map((v, i) => {
                                  return <li key={i}>{v}</li>
                              })
                            : null}
                    </ul>
                </Fragment>
            ) : null}
        </div>
    )
}

export default InvestigationPrev
