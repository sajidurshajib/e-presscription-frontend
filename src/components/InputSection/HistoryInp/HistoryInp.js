import CoMorbidity from './CoMorbidity/CoMorbidity'
import classes from './HistoryInp.module.css'
import Drug from './HistorySingle/Drug'
import Family from './HistorySingle/Family'
import Medical from './HistorySingle/Medical'
import Personal from './HistorySingle/Personal'
import Professional from './HistorySingle/Professional'

const HistoryInp = () => {
    return (
        <div className={classes.HistoryInp}>
            <div className={classes.wrap}>
                <Personal />
                <Professional />
                <Family />
                <Drug />
                <Medical />

                <CoMorbidity />
            </div>
        </div>
    )
}

export default HistoryInp
