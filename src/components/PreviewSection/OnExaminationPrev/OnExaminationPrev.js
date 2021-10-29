import { useState } from 'react'
//useContext
// import { OnExamination } from '../../../allContext'
import classes from './OnExaminationPrev.module.css'

const OnExaminationPrev = () => {
    const [toggle, setToggle] = useState(false)
    // const { stateOnExamination } = useContext(OnExamination)
    return (
        <div className={classes.OnExaminationPrev}>
            <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                On-Examination
            </h3>
            {toggle ? (
                <>
                    <ul>
                        <li>
                            BP <span>: 83</span>
                        </li>
                        <li>
                            Pulse <span>: 80</span>
                        </li>
                        <li>
                            Temp <span>: 98</span>
                        </li>
                    </ul>
                </>
            ) : null}
        </div>
    )
}

export default OnExaminationPrev
