import classes from './CoMorbidity.module.css'

const CoMorbidity = () => {
    return (
        <div className={classes.CoMorbidity}>
            <h3>
                Co-Morbidity <span>Remark</span>
            </h3>
            <div className={classes.wrapper}>
                <div className={classes.check}>
                    <input type="checkbox" id="htn" />
                    <label htmlFor="htn">Hypertension (HTN)</label>
                    <input type="text" placeholder="HTN" />
                </div>
                <div className={classes.check}>
                    <input type="checkbox" id="dm" />
                    <label htmlFor="dm">Diabetes (DM)</label>
                    <input type="text" placeholder="DM" />
                </div>
                <div className={classes.check}>
                    <input type="checkbox" id="tb" />
                    <label htmlFor="tb">Tuberculosis (TB)</label>
                    <input type="text" placeholder="TB" />
                </div>
                <div className={classes.check}>
                    <input type="checkbox" id="as" />
                    <label htmlFor="as">Asthma</label>
                    <input type="text" placeholder="Asthma" />
                </div>
            </div>
        </div>
    )
}

export default CoMorbidity
