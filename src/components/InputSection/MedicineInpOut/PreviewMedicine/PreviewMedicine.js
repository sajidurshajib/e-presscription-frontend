import { Fragment, useContext } from 'react'
import { Medicine } from '../../../../allContext'
import classes from './PreviewMedicine.module.css'

const PreviewMedicine = () => {
    const { stateMedicine } = useContext(Medicine)

    return (
        <div className={classes.PreviewMedicine}>
            <h4>Preview Medicine</h4>

            {stateMedicine.medicine.map((v, i) => {
                return (
                    <Fragment key={i}>
                        <div className={classes.medicine}>
                            <p>
                                {v.form} | {v.name} | {v.strength}
                            </p>
                            <p>
                                {v.doses} <span>|</span> After Meal <span>|</span> {v.day}{' '}
                                {v.day === 1 ? 'day' : 'days'}
                            </p>
                            <p>{v.remark}</p>

                            <div className={classes.btn}>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </Fragment>
                )
            })}

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
        </div>
    )
}

export default PreviewMedicine
