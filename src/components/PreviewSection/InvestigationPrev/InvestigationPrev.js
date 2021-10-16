import { useState, useContext } from 'react'
import { Investigation } from '../../../allContext'
import classes from './InvestigationPrev.module.css'

const InvestigationPrev = () => {
    const [toggle, setToggle] = useState(true)

    const { stateInvestigation } = useContext(Investigation)

    return (
        <div className={classes.InvestigationPrev}>
            <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                Investigation
            </h3>
            {toggle ? (
                <>
                    <ul>
                        {stateInvestigation.inv.map((v, i) => {
                            return <li key={i}>{v}</li>
                        })}
                    </ul>
                </>
            ) : null}
        </div>
    )
}

export default InvestigationPrev
