import { useContext } from 'react'
import { FieldContext } from '../../allContext'
import ChiefComplaintsInp from './ChiefComplaintsInp/ChiefComplaintsInp'
import DiagnosisInp from './DiagnosisInp/DiagnosisInp'
import HistoryInp from './HistoryInp/HistoryInp'
import InvestigationInp from './InvestigationInp/InvestigationInp'
import MedicineInpOut from './MedicineInpOut/MedicineInpOut'
import OnExaminationInp from './OnExaminationInp/OnExaminationInp'

const InputSection = () => {
    const { state } = useContext(FieldContext)
    return (
        <div>
            {state.field === 'chief' ? <ChiefComplaintsInp /> : null}
            {state.field === 'diagnosis' ? <DiagnosisInp /> : null}
            {state.field === 'history' ? <HistoryInp /> : null}
            {state.field === 'investigation' ? <InvestigationInp /> : null}
            {state.field === 'onexam' ? <OnExaminationInp /> : null}
            {state.field === 'medicine' ? <MedicineInpOut /> : null}
        </div>
    )
}

export default InputSection
