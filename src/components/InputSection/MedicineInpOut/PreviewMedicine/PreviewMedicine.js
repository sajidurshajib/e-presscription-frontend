import classes from './PreviewMedicine.module.css'

const PreviewMedicine = () => {
    return (
        <div className={classes.PreviewMedicine}>
            <h4>Preview Medicine</h4>
            <div className={classes.medicine}>
                <p>Tab | Flexi | 100mg</p>
                <p>
                    1 + 0 + 1 <span>|</span> After Meal <span>|</span> 25 days
                </p>
                <p>Take it after half an hour of meal.</p>

                <div className={classes.btn}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>

            <div className={classes.medicine}>
                <p>Cap | Sergel | 20mg</p>
                <p>
                    1 + 0 + 1 <span>|</span> Before Meal <span>|</span> 25 days
                </p>
                <p>Before half an hour of meal.</p>

                <div className={classes.btn}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default PreviewMedicine
