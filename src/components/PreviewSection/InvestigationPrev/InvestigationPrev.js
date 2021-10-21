import { useState, useContext, Fragment } from 'react'
import { Investigation } from '../../../allContext'
import classes from './InvestigationPrev.module.css'

const InvestigationPrev = () => {
    const [toggle, setToggle] = useState(true)

    const { stateInvestigation } = useContext(Investigation)

    return (
        <div className={classes.InvestigationPrev}>
            {stateInvestigation.inv.length !== 0 ? (
                <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                    Investigation
                </h3>
            ) : null}
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
