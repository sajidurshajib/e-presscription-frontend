import { useContext } from 'react'
import { useState } from 'react'
import { ChiefComplaints } from '../../../allContext'
import EditAndDelete from '../EditAndDelete/EditAndDelete'
import classes from './ChiefComplaintsPrev.module.css'

const ChiefComplaintsPrev = () => {
    const [toggle, setToggle] = useState(true)
    const [editValue, setEditValue] = useState(null)

    const { stateChief } = useContext(ChiefComplaints)

    return (
        <div className={classes.ChiefComplaintsPrev}>
            <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                Chief Complaints
            </h3>
            {editValue !== null ? <EditAndDelete editValue={setEditValue} value={editValue} /> : null}
            {toggle ? (
                <ul>
                    {stateChief.cc.length !== 0
                        ? stateChief.cc
                              .replace(/\n+$/, '')
                              .split('\n')
                              .map((v, i) => {
                                  return (
                                      <li key={i}>
                                          {v} <span onClick={() => setEditValue({ v, i })}>Edit</span>
                                      </li>
                                  )
                              })
                        : null}
                </ul>
            ) : null}
        </div>
    )
}

export default ChiefComplaintsPrev
