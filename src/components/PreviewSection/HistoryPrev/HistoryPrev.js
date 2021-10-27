import { Fragment, useContext, useState } from 'react'
import { History } from '../../../allContext'
import classes from './HistoryPrev.module.css'
import CoMorbidity from './HistoryPrevChild/CoMorbiditry'
import Drug from './HistoryPrevChild/Drug'
import Family from './HistoryPrevChild/Family'
import Medical from './HistoryPrevChild/Medical'
import Personal from './HistoryPrevChild/Personal'
import Professional from './HistoryPrevChild/Professional'
import Vaccination from './HistoryPrevChild/Vaccination'

const HistoryPrev = () => {
    const [toggle, setToggle] = useState(true)
    const {
        statePersonalHistory,
        stateProfessionalHistory,
        stateFamilyHistory,
        stateDrugHistory,
        stateMedicalHistory,
        stateVaccinationHistory,
        stateCoMorbidity,
    } = useContext(History)

    const AllLength =
        statePersonalHistory.personal.length +
        stateProfessionalHistory.professional.length +
        stateFamilyHistory.family.length +
        stateMedicalHistory.medical.length +
        stateVaccinationHistory.vaccination.length +
        stateDrugHistory.drug.length +
        stateCoMorbidity.coMorbidity.length

    return (
        <div className={classes.HistoryPrev}>
            {AllLength ? (
                <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                    History
                </h3>
            ) : null}
            {toggle ? (
                <Fragment>
                    <Personal />
                    <CoMorbidity />
                    <Professional />
                    <Family />
                    <Drug />
                    <Medical />
                    <Vaccination />
                </Fragment>
            ) : null}
        </div>
    )
}

export default HistoryPrev
