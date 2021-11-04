import React from 'react'
// import boxLogo from '../../../assets/img/healthx-box.png'
import classes from './Generate.module.css'

export const GeneratePDF = React.forwardRef((props, ref) => {
    const day = () => {
        let d = new Date().getDate()
        return d
    }
    const month = () => {
        let m = new Date().getMonth()
        return m
    }
    const year = () => {
        let y = new Date().getFullYear()
        return y
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.Generate} ref={ref}>
                {/* Top field */}
                <div className={classes.top}>
                    <div className={classes.topLeft}>
                        <h3>Dr. Rashadul Hasan</h3>
                        <p>Medicine Specialist</p>
                        <p>MBBS, FRCS</p>
                    </div>
                    <div className={classes.topRight}>
                        {/* <img src={boxLogo} alt="Box Logo" /> */}
                        <h3>Chamber</h3>
                        <p>152/2 Block L</p>
                        <p>Dhaka</p>
                    </div>
                </div>

                {/* Patient */}
                <div className={classes.patient}>
                    <p>
                        <b>Name :</b> Jhon Wick
                    </p>
                    <p>
                        <b>Age :</b> 39
                    </p>
                    <p>
                        <b>Sex :</b> Male
                    </p>
                    <p className={classes.date}>
                        <b>Date :</b>
                        {day() < 10 ? '0' + day().toString() : day()} - {month() + 1} - {year()}
                    </p>
                </div>

                {/* Middle body */}
                <div className={classes.middleBody}>
                    {/* Left part */}
                    <div className={classes.leftBody}>
                        {/* Chief Complaints */}
                        <h4>C/C :</h4>
                        <ol>
                            <li>7 days fever.</li>
                            <li>Dry Caugh</li>
                            <li>Body Ache</li>
                        </ol>

                        {/* History */}
                        <div className={classes.history}>
                            <h4>History</h4>
                            <p>
                                <b>Personal :</b>
                                Smocker, Alcholholic
                            </p>
                            <p>
                                <b>Professional :</b>
                                Smocker, Alcholholic
                            </p>
                        </div>

                        {/* On Examiation */}
                        <h4>O/E :</h4>
                        <ol>
                            <li>Blood Pressure (BP) : 120 / 80 mm of Hg</li>
                            <li>Pulse : 56 beats/min</li>
                            <li>Temp : 98 ° F</li>
                            <li>RBS : 70</li>
                        </ol>

                        {/* Investigation */}
                        <h4>INV :</h4>
                        <ol>
                            <li>BUCCAL SWAB PROTEIN</li>
                            <li>PLEURAL FLUID LDH</li>
                            <li>SERUM HCO3</li>
                            <li>PERICARDIAL FL.ADA</li>
                        </ol>

                        {/* Probable Diagnosis */}
                        <h4>D/D :</h4>
                        <p className={classes.diagnosis}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate impedit nihil
                            consectetur adipisci voluptatem quia quibusdam voluptas, itaque totam!
                        </p>

                        {/* Confirmatory  */}
                        <h4>Confirmatory Diagnosis :</h4>
                        <p className={classes.diagnosis}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus nulla hic
                            consequuntur velit animi adipisci blanditiis voluptates minus corporis.
                        </p>
                    </div>
                    {/* Right part */}
                    <div className={classes.rightBody}>
                        <div className={classes.medicine}>
                            <h3>Rx</h3>
                            <div className={classes.singleMedicine}>
                                <span>Tab - Flexi - 100mg</span>
                                <p>1 + 0 + 1 | After Meal | 25 days</p>
                                <p>Take it after half an hour of meal.</p>
                            </div>

                            <div className={classes.singleMedicine}>
                                <span>Tab - Flexi - 100mg</span>
                                <p>1 + 0 + 1 | After Meal | 25 days</p>
                                <p>Take it after half an hour of meal.</p>
                            </div>

                            <div className={classes.singleMedicine}>
                                <span>Tab - Flexi - 100mg</span>
                                <p>1 + 0 + 1 | After Meal | 25 days</p>
                                <p>Take it after half an hour of meal.</p>
                            </div>

                            <div className={classes.singleMedicine}>
                                <span>Tab - Flexi - 100mg</span>
                                <p>1 + 0 + 1 | After Meal | 25 days</p>
                                <p>Take it after half an hour of meal.</p>
                            </div>

                            <div className={classes.singleMedicine}>
                                <span>Tab - Flexi - 100mg</span>
                                <p>1 + 0 + 1 | After Meal | 25 days</p>
                                <p>Take it after half an hour of meal.</p>
                            </div>
                        </div>

                        {/* Advice */}
                        <h4>Advice :</h4>
                        <ol>
                            <li>Blood Pressure (BP) : 80 / 120 mm of Hg</li>
                            <li>Pulse : 56 beats/min</li>
                            <li>Temp : 98 ° F</li>
                            <li>RBS : 70</li>
                        </ol>
                    </div>
                </div>
                <div className={classes.signature}>
                    <span></span>
                    <p className>Dr. Signature</p>
                </div>
            </div>
        </div>
    )
})
