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
                {hfield === 2 ? <CoMorbidity /> : <h4 onClick={() => setHfield(2)}>Co-Morbidity</h4>}
                {hfield === 3 ? <Professional /> : <h4 onClick={() => setHfield(3)}>Professional History</h4>}
                {hfield === 4 ? <Family /> : <h4 onClick={() => setHfield(4)}>Family History</h4>}
                {hfield === 5 ? <Drug /> : <h4 onClick={() => setHfield(5)}>Drug History</h4>}
                {hfield === 6 ? <Medical /> : <h4 onClick={() => setHfield(6)}>Medical History</h4>}
                {hfield === 7 ? <Vaccination /> : <h4 onClick={() => setHfield(7)}>Vaccination History</h4>}
            </div>
        </div>
    )
}

export default HistoryInp
