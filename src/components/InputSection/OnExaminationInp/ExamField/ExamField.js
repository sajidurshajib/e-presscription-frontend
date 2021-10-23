import { Fragment } from 'react'
import classes from './ExamField.module.css'

const ExamField = ({ name }) => {
    return (
        <div className={classes.ExamField}>
            {/* Blood Pressure*/}
            {name === 'bloodpressure' ? (
                <Fragment>
                    <div className={classes.wrap4}>
                        <p>Blood Pressure (BP) :</p>
                        <input type="number" placeholder="Systolic" required />
                        <span>/</span>
                        <input type="number" placeholder="Diastolic" required />
                        <p>mm of Hg</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Pluse*/}
            {name === 'pulse' ? (
                <Fragment>
                    <div className={classes.wrap2}>
                        <p>Pulse :</p>
                        <input type="number" name="" id="" required />
                        <p>beats/min</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Temp*/}
            {name === 'temp' ? (
                <Fragment>
                    <div className={classes.wrap3}>
                        <p>Temp : </p>
                        <input type="number" required />
                        <select>
                            <option value="f"> &deg; F </option>
                            <option value="c"> &deg; C </option>
                        </select>
                    </div>
                </Fragment>
            ) : null}

            {/* RBS*/}
            {name === 'rbs' ? (
                <Fragment>
                    <div className={classes.wrap2}>
                        <p>RBS : </p>
                        <input type="number" required />
                        <p>mmol/L</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Heart*/}
            {name === 'heart' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Heart :</p>
                        <input type="text" required />
                    </div>
                </Fragment>
            ) : null}

            {/* Lungs*/}
            {name === 'lungs' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Lungs :</p>
                        <input type="text" required />
                    </div>
                </Fragment>
            ) : null}

            {/* Weight*/}
            {name === 'weight' ? (
                <Fragment>
                    <div className={classes.wrap2}>
                        <p>Weight : </p>
                        <input type="number" required />
                        <p>Kg</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Anaemia */}
            {name === 'anaemia' ? (
                <Fragment>
                    <div className={classes.wrap1}>
                        <p>Anaemia : </p>
                        <select>
                            <option value="-">-</option>
                            <option value="+">+</option>
                        </select>
                        <input type="text" placeholder="Remark" required />
                    </div>
                </Fragment>
            ) : null}

            {/* Jaundice */}
            {name === 'jaundice' ? (
                <Fragment>
                    <div className={classes.wrap1}>
                        <p>Jaundice : </p>
                        <select>
                            <option value="-">-</option>
                            <option value="+">+</option>
                        </select>
                        <input type="text" placeholder="Remark" required />
                    </div>
                </Fragment>
            ) : null}

            {/* Cyanois */}
            {name === 'cyanosis' ? (
                <Fragment>
                    <div className={classes.wrap1}>
                        <p>Cyanosis : </p>
                        <select>
                            <option value="-">-</option>
                            <option value="+">+</option>
                        </select>
                        <input type="text" placeholder="Remark" required />
                    </div>
                </Fragment>
            ) : null}

            {/* Heart rate*/}
            {name === 'heartrate' ? (
                <Fragment>
                    <div className={classes.wrap2}>
                        <p>Heart rate:</p>
                        <input type="number" required />
                        <p>beats/min</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Respiratory rate*/}
            {name === 'respiratory' ? (
                <Fragment>
                    <div className={classes.wrap2}>
                        <p>Respiratory rate:</p>
                        <input type="number" required />
                        <p>breaths/min</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Oedema*/}
            {name === 'oedema' ? (
                <Fragment>
                    <div className={classes.wrap1}>
                        <p>Oedema : </p>
                        <select>
                            <option value="-">-</option>
                            <option value="+">+</option>
                        </select>
                        <input type="text" placeholder="Remark" required />
                    </div>
                </Fragment>
            ) : null}

            {/* Height*/}
            {name === 'height' ? (
                <Fragment>
                    <div className={classes.wrap5}>
                        <p>Height : </p>
                        <input type="number" required />
                        <p>Feet</p>
                        <input type="number" required />
                        <p>Inch</p>
                    </div>
                </Fragment>
            ) : null}
        </div>
    )
}

export default ExamField
