import classes from './HistoryPrev.module.css'

const HistoryPrev = () => {
    return (
        <div className={classes.HistoryPrev}>
            <h3>History</h3>
            <h4>Personal history</h4>
            <ul className={classes.historyli}>
                <li>Demo exist</li>
                <li>Demo problem</li>
                <li>Demo exist</li>
            </ul>
            <h4>Professional history</h4>
            <ul className={classes.historyli}>
                <li>Demo exist</li>
                <li>Demo problem</li>
            </ul>
            <h4>Family history</h4>
            <ul className={classes.historyli}>
                <li>Demo exist</li>
                <li>Demo problem</li>
                <li>Demo exist</li>
            </ul>
            <h4>Drug history</h4>
            <ul className={classes.historyli}>
                <li>Demo exist</li>
                <li>Demo problem</li>
            </ul>
            <h4>Medical history</h4>
            <ul className={classes.historyli}>
                <li>Demo exist</li>
                <li>Demo problem</li>
                <li>Demo exist</li>
                <li>Demo problem</li>
            </ul>
            <h3>Co-Morbidity</h3>
            <ul className={classes.combrt}>
                <li>
                    Hypertension (HTN)<span className={classes.red}>+</span>
                </li>
                <li>
                    Diabetes (DM)<span>-</span>
                </li>
                <li>
                    Tuberculosis (TB)<span className={classes.red}>+</span>
                </li>
                <li>
                    Asthma <span>-</span>
                </li>
            </ul>
        </div>
    )
}

export default HistoryPrev
