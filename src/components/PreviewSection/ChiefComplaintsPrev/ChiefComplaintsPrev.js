import { useState } from 'react'
import classes from './ChiefComplaintsPrev.module.css'

const ChiefComplaintsPrev = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <div className={classes.ChiefComplaintsPrev}>
            <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                Chief Complaints
            </h3>
            {toggle ? (
                <ul>
                    <li>Fever for 7 days</li>
                    <li>Body Ache</li>
                    <li>Common Cold</li>
                    <li>Sore Throat</li>
                </ul>
            ) : null}
        </div>
    )
}

export default ChiefComplaintsPrev
