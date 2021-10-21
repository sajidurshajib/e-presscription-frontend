import { useState } from 'react'
import CoMorbidity from './CoMorbidity/CoMorbidity'
import classes from './HistoryInp.module.css'
import Drug from './HistorySingle/Drug'
import Family from './HistorySingle/Family'
import Medical from './HistorySingle/Medical'
import Personal from './HistorySingle/Personal'
import Professional from './HistorySingle/Professional'
import Vaccination from './HistorySingle/Vaccination'

const HistoryInp = () => {
    const [hfield, setHfield] = useState(1)
    return (
        <div className={classes.HistoryInp}>
            <div className={classes.wrap}>
                {hfield === 1 ? <Personal /> : <h4 onClick={() => setHfield(1)}>Personal History</h4>}
                {hfield === 2 ? <Professional /> : <h4 onClick={() => setHfield(2)}>Professional History</h4>}
                {hfield === 3 ? <Family /> : <h4 onClick={() => setHfield(3)}>Family History</h4>}
                {hfield === 4 ? <Drug /> : <h4 onClick={() => setHfield(4)}>Drug History</h4>}
                {hfield === 5 ? <Medical /> : <h4 onClick={() => setHfield(5)}>Medical History</h4>}
                {hfield === 6 ? <Vaccination /> : <h4 onClick={() => setHfield(6)}>Vaccination History</h4>}

                <CoMorbidity />
            </div>
        </div>
    )
}

export default HistoryInp
