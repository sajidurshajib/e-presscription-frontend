import classes from './CoMorbidity.module.css'

const CoMorbidity = () => {
    return (
        <div className={classes.CoMorbidity}>
            <h3>Co-Morbidity</h3>
            <div className={classes.wrapper}>
                <div className={classes.check}>
                    <input type="checkbox" id="htn" />
                    <label htmlFor="htn">Hypertension (HTN)</label>
                </div>
                <div className={classes.check}>
                    <input type="checkbox" id="dm" />
                    <label htmlFor="dm">Diabetes (DM)</label>
                </div>
                <div className={classes.check}>
                    <input type="checkbox" id="tb" />
                    <label htmlFor="tb">Tuberculosis (TB)</label>
                </div>
                <div className={classes.check}>
                    <input type="checkbox" id="as" />
                    <label htmlFor="as">Asthma</label>
                </div>
            </div>
        </div>
    )
}

export default CoMorbidity
