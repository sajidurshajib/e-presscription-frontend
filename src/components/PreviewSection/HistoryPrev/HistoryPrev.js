import { useState } from 'react'
import classes from './HistoryPrev.module.css'
import CoMorbidity from './HistoryPrevChild/CoMorbiditry'
import Drug from './HistoryPrevChild/Drug'
import Family from './HistoryPrevChild/Family'
import Medical from './HistoryPrevChild/Medical'
import Personal from './HistoryPrevChild/Personal'
import Professional from './HistoryPrevChild/Professional'
import Vaccination from './HistoryPrevChild/Vaccination'

const HistoryPrev = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div className={classes.HistoryPrev}>
            <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                History
            </h3>
            {toggle ? (
                <>
                    <Personal />
                    <CoMorbidity />
                    <Professional />
                    <Family />
                    <Drug />
                    <Medical />
                    <Vaccination />
                </>
            ) : null}
        </div>
    )
}

export default HistoryPrev
