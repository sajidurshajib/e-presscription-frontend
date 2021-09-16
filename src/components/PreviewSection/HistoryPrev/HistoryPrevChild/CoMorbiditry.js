import classes from './HistoryPrevChild.module.css'

const CoMorbidity = () => {
    return (
        <div className={classes.HistoryPrev}>
            <h4 className={classes.combrth}>Co-Morbidity</h4>
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

export default CoMorbidity
