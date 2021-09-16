import { useState } from 'react'
import classes from './HistoryPrevChild.module.css'

const Professional = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div className={classes.HistoryPrev}>
            <h4
                className={toggle ? classes.historyChildH : `${classes.historyChildH} ${classes.toggle}`}
                onClick={() => setToggle(!toggle)}>
                Professional history
            </h4>
            {toggle ? (
                <>
                    <ul className={classes.historyli}>
                        <li>Demo exist</li>
                        <li>Demo problem</li>
                    </ul>
                </>
            ) : null}
        </div>
    )
}

export default Professional
