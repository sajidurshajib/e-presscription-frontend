import { useState } from 'react'
import classes from './InvestigationPrev.module.css'

const InvestigationPrev = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <div className={classes.InvestigationPrev}>
            <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                Investigation
            </h3>
            {toggle ? (
                <>
                    <ul>
                        <li>CVC</li>
                        <li>X-Ray</li>
                        <li>Urine R/E</li>
                        <li>Urine C/S</li>
                    </ul>
                </>
            ) : null}
        </div>
    )
}

export default InvestigationPrev
