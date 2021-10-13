import classes from './PreviewMedicine.module.css'

const PreviewMedicine = () => {
    return (
        <div className={classes.PreviewMedicine}>
            <h4>Preview Medicine</h4>
            <div className={classes.medicine}>
                <p>Napa | Tab | 500mg</p>
                <p>
                    1 + 0 + 1 <span>|</span> After Meal <span>|</span> 25 days
                </p>
                <p>Take it before half an hour goig to bed.</p>

                <div className={classes.btn}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>

            <div className={classes.medicine}>
                <p>Napa | Tab | 500mg</p>
                <p>
                    1 + 0 + 1 <span>|</span> After Meal <span>|</span> 25 days
                </p>
                <p>Take it before half an hour goig to bed.</p>

                <div className={classes.btn}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default PreviewMedicine
