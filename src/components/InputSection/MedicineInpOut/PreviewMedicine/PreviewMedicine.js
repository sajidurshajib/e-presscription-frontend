import { Fragment, useContext } from 'react'
import { Medicine } from '../../../../allContext'
import classes from './PreviewMedicine.module.css'

const PreviewMedicine = () => {
    const { stateMedicine, dispatchMedicine } = useContext(Medicine)

    const del = (e) => {
        e.preventDefault()
        dispatchMedicine({ type: 'remove' })
    }

    return (
        <div className={classes.PreviewMedicine}>
            <h4>Preview Medicine</h4>

            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {stateMedicine.medicine.map((v, i) => {
                return (
                    <Fragment key={i}>
                        <div className={classes.medicine}>
                            <p>
                                {v.form}. {v.name} {v.strength}
                            </p>
                            <p>
                                {v.doses} <span>-</span> {v.after ? 'After Meal' : 'Before Meal'} <span>-</span> {v.day}{' '}
                                {v.day === 1 ? 'day' : 'days'}
                            </p>
                            <p>{v.remark}</p>

                            <div className={classes.btn}>
                                {/* <button>Edit</button>
                                <button>Delete</button> */}
                            </div>
                        </div>
                    </Fragment>
                )
            })}
        </div>
    )
}

export default PreviewMedicine
