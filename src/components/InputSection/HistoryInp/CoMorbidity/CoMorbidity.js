import { useState } from 'react'
import classes from './CoMorbidity.module.css'

const CoMorbidity = () => {
    const [htn, setHtn] = useState(false)
    const [dm, setDm] = useState(false)
    const [tb, setTb] = useState(false)
    const [asm, setAsm] = useState(false)

    return (
        <div className={classes.CoMorbidity}>
            <h3>
                Co-Morbidity <span>Remark</span>
            </h3>
            <div className={classes.wrapper}>
                <div className={classes.check}>
                    <p>
                        Hypertension (HTN)<span>{htn ? '+' : null}</span>
                    </p>
                    <button onClick={() => setHtn(!htn)}>+/-</button>
                    {htn ? <input type="text" /> : null}
                </div>
                <div className={classes.check}>
                    <p>
                        Diabetes (DM)<span>{dm ? '+' : null}</span>
                    </p>
                    <button onClick={() => setDm(!dm)}>+/-</button>
                    {dm ? <input type="text" /> : null}
                </div>
                <div className={classes.check}>
                    <p>
                        Tuberculosis (TB)<span>{tb ? '+' : null}</span>
                    </p>
                    <button onClick={() => setTb(!tb)}>+/-</button>
                    {tb ? <input type="text" /> : null}
                </div>
                <div className={classes.check}>
                    <p>
                        Asthma<span>{asm ? '+' : null}</span>
                    </p>
                    <button onClick={() => setAsm(!asm)}>+/-</button>
                    {asm ? <input type="text" /> : null}
                </div>
            </div>
        </div>
    )
}

export default CoMorbidity
