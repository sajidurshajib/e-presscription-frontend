import { Fragment } from 'react'
import classes from './ExamField.module.css'

const ExamField = ({ name }) => {
    return (
        <div className={classes.ExamField}>
            {/* Anaemia */}
            {name === 'anaemia' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Anaemia : </p>
                        <select>
                            <option value="-">-</option>
                            <option value="+">+</option>
                        </select>
                        <input type="text" placeholder="Remark" />
                    </div>
                </Fragment>
            ) : null}

            {/* Jaundice */}
            {name === 'jaundice' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Jaundice : </p>
                        <select>
                            <option value="-">-</option>
                            <option value="+">+</option>
                        </select>
                        <input type="text" placeholder="Remark" />
                    </div>
                </Fragment>
            ) : null}

            {/* Cyanois */}
            {name === 'cyanosis' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Cyanosis : </p>
                        <select>
                            <option value="-">-</option>
                            <option value="+">+</option>
                        </select>
                        <input type="text" placeholder="Remark" />
                    </div>
                </Fragment>
            ) : null}

            {/* Blood Pressure*/}
            {name === 'bloodpressure' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Blood Pressure :</p>
                        <input type="number" name="" id="" />/
                        <input type="number" name="" id="" />
                        <p>mm of Hg</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Pluse*/}
            {name === 'pulse' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Pulse :</p>
                        <input type="number" name="" id="" />
                        <p>beats/min</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Heart*/}
            {name === 'heart' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Heart :</p>
                        <input type="text" />
                    </div>
                </Fragment>
            ) : null}

            {/* Lungs*/}
            {name === 'lungs' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Heart :</p>
                        <input type="text" />
                    </div>
                </Fragment>
            ) : null}

            {/* Heart rate*/}
            {name === 'heartrate' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Heart rate:</p>
                        <input type="number" />
                        <p>beats/min</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Respiratory rate*/}
            {name === 'respiratory' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Respiratory rate:</p>
                        <input type="number" />
                        <p>breaths/min</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Odema*/}
            {name === 'odema' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Odema : </p>
                        <select>
                            <option value="-">-</option>
                            <option value="+">+</option>
                        </select>
                        <input type="text" placeholder="Remark" />
                    </div>
                </Fragment>
            ) : null}

            {/* Weight*/}
            {name === 'weight' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Weight : </p>
                        <input type="number" />
                        <p>Kg</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Weight*/}
            {name === 'weight' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Height : </p>
                        <input type="number" />
                        <p>Feet</p>
                        <input type="number" />
                        <p>Inch</p>
                    </div>
                </Fragment>
            ) : null}

            {/* Temp*/}
            {name === 'temp' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Temp : </p>
                        <input type="number" />
                        <select>
                            <option value="f">f</option>
                            <option value="c">c</option>
                        </select>
                    </div>
                </Fragment>
            ) : null}

            {/* RBS*/}
            {name === 'rbs' ? (
                <Fragment>
                    <div className={classes.wrap}>
                        <p>Temp : </p>
                        <input type="number" />
                        <p>mmol/L</p>
                    </div>
                </Fragment>
            ) : null}
        </div>
    )
}

export default ExamField
