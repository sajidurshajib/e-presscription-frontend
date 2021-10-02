import { useState } from 'react'
import EditAndDelete from '../EditAndDelete/EditAndDelete'
import classes from './ChiefComplaintsPrev.module.css'

const ChiefComplaintsPrev = () => {
    const [toggle, setToggle] = useState(true)
    const [editValue, setEditValue] = useState(null)

    const demo = ['Fever for 7 days', 'Body Ache', 'Common Cold', 'Sore Throat']

    return (
        <div className={classes.ChiefComplaintsPrev}>
            <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                Chief Complaints
            </h3>
            {editValue !== null ? <EditAndDelete editValue={setEditValue} value={editValue} /> : null}
            {toggle ? (
                <ul>
                    {demo.map((v, i) => {
                        return (
                            <li key={i}>
                                {v} <span onClick={() => setEditValue({ v, i })}>Edit</span>
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </div>
    )
}

export default ChiefComplaintsPrev
