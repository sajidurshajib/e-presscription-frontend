import { useReducer } from 'react'
import { PdfWrapped } from '../allContext'
import EpPDF from '../components/EpPDF/EpPDF'
import { patientState, patientReducer } from '../reducer/PatientInfoReducer'
import { adviceReducer, adviceState } from '../reducer/adviceReducer'
import { chiefReducer, chiefState } from '../reducer/chiefReducer'
import { coMorbidityReducer, coMorbidityState } from '../reducer/coMorbidityReducer'
import { diagnosisReducer, diagnosisState } from '../reducer/diagnosisReducer'
import { drugHistoryReducer, drugHistoryState } from '../reducer/drugHistoryReducer'
import { familyHistoryReducer, familyHistoryState } from '../reducer/familyHistoryReducer'
import { investigationReducer, investigationState } from '../reducer/investigationReducer'
import { medicalHistoryReducer, medicalHistoryState } from '../reducer/medicalHistoryReducer'
import { medicineReducer, medicineState } from '../reducer/medicineReducer'
import { onExaminationReducer, onExaminationState } from '../reducer/onExaminationReducer'
import { personalHistoryReducer, personalHistoryState } from '../reducer/personalHistoryReducer'
import { professionalHistoryReducer, professionalHistoryState } from '../reducer/professionalHistoryReducer'
import { vaccinationHistoryReducer, vaccinationHistoryState } from '../reducer/vaccinationHistoryReducer'

const EPrescriptionPDF = () => {
    const [statePatient, dispatchPatient] = useReducer(patientReducer, patientState)
    const [stateChief, dispatchChief] = useReducer(chiefReducer, chiefState)
    const [stateOnExamination, dispatchOnExamination] = useReducer(onExaminationReducer, onExaminationState)
    const [stateInvestigation, dispatchInvestigation] = useReducer(investigationReducer, investigationState)
    const [stateDiagnosis, dispatchDiagnosis] = useReducer(diagnosisReducer, diagnosisState)
    const [stateAdvice, dispatchAdvice] = useReducer(adviceReducer, adviceState)
    const [stateMedicine, dispatchMedicine] = useReducer(medicineReducer, medicineState)
    const [statePersonalHistory, dispatchPersonalHistory] = useReducer(personalHistoryReducer, personalHistoryState)
    const [stateCoMorbidity, dispatchCoMorbidity] = useReducer(coMorbidityReducer, coMorbidityState)
    const [stateProfessionalHistory, dispatchProfessionalHistory] = useReducer(
        professionalHistoryReducer,
        professionalHistoryState
    )
    const [stateFamilyHistory, dispatchFamilyHistory] = useReducer(familyHistoryReducer, familyHistoryState)
    const [stateDrugHistory, dispatchDrugHistory] = useReducer(drugHistoryReducer, drugHistoryState)
    const [stateMedicalHistory, dispatchMedicalHistory] = useReducer(medicalHistoryReducer, medicalHistoryState)
    const [stateVaccinationHistory, dispatchVaccinationHistory] = useReducer(
        vaccinationHistoryReducer,
        vaccinationHistoryState
    )

    const value = {
        statePatient,
        dispatchPatient,
        stateChief,
        dispatchChief,
        stateOnExamination,
        dispatchOnExamination,
        stateInvestigation,
        dispatchInvestigation,
        stateDiagnosis,
        dispatchDiagnosis,
        stateAdvice,
        dispatchAdvice,
        stateMedicine,
        dispatchMedicine,
        statePersonalHistory,
        dispatchPersonalHistory,
        stateCoMorbidity,
        dispatchCoMorbidity,
        stateProfessionalHistory,
        dispatchProfessionalHistory,
        stateFamilyHistory,
        dispatchFamilyHistory,
        stateDrugHistory,
        dispatchDrugHistory,
        stateMedicalHistory,
        dispatchMedicalHistory,
        stateVaccinationHistory,
        dispatchVaccinationHistory,
    }

    return (
        <div>
            <PdfWrapped.Provider value={value}>
                <EpPDF />
            </PdfWrapped.Provider>
        </div>
    )
}
export default EPrescriptionPDF
