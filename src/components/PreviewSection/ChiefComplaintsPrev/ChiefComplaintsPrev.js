import { useContext } from 'react'
import { useState } from 'react'
import { ChiefComplaints } from '../../../allContext'
// import EditAndDelete from '../EditAndDelete/EditAndDelete'
import classes from './ChiefComplaintsPrev.module.css'

const ChiefComplaintsPrev = () => {
    const [toggle, setToggle] = useState(true)

    const { stateChief, dispatchChief } = useContext(ChiefComplaints)

    const del = (e) => {
        e.preventDefault()
        dispatchChief({ type: 'remove' })
    }

    return (
        <div className={classes.ChiefComplaintsPrev}>
            {stateChief.cc.length !== 0 ? (
                <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                    Chief Complaints
                </h3>
            ) : null}
            <button className={classes.del} onClick={(e) => del(e)}>
                x
            </button>
            {/* {editValue !== null ? <EditAndDelete editValue={setEditValue} value={editValue} /> : null} */}
            {toggle ? (
                <ul>
                    {stateChief.cc.length !== 0
                        ? stateChief.cc
                              .replace(/\n+$/, '')
                              .split('\n')
                              .map((v, i) => {
                                  return <li key={i}>{v}</li>
                              })
                        : null}
                </ul>
            ) : null}
        </div>
    )
}

export default ChiefComplaintsPrev
