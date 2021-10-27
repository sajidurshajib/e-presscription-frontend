import { useReducer } from 'react'
import { ChiefComplaints, History, Investigation, Diagnosis, Advice, Next } from '../../allContext'
import { adviceState, adviceReducer } from '../../reducer/adviceReducer'
import { chiefState, chiefReducer } from '../../reducer/chiefReducer'
import { diagnosisReducer, diagnosisState } from '../../reducer/diagnosisReducer'
import { familyHistoryReducer, familyHistoryState } from '../../reducer/familyHistoryReducer'
import { investigationReducer, investigationState } from '../../reducer/investigationReducer'
import { nextReducer, nextState } from '../../reducer/nextReducer'
import { personalHistoryReducer, personalHistoryState } from '../../reducer/personalHistoryReducer'
import { professionalHistoryReducer, professionallHistoryState } from '../../reducer/professionalHistoryReducer'
import InputSection from '../InputSection/InputSection'
import PreviewSection from '../PreviewSection/PreviewSection'
import classes from './Body.module.css'

const Body = () => {
    const [stateChief, dispatchChief] = useReducer(chiefReducer, chiefState)
    const [stateInvestigation, dispatchInvestigation] = useReducer(investigationReducer, investigationState)
    const [stateDiagnosis, dispatchDiagnosis] = useReducer(diagnosisReducer, diagnosisState)
    const [stateAdvice, dispatchAdvice] = useReducer(adviceReducer, adviceState)
    const [stateNext, dispatchNext] = useReducer(nextReducer, nextState)
    const [statePersonalHistory, dispatchPersonalHistory] = useReducer(personalHistoryReducer, personalHistoryState)
    const [stateProfessionalHistory, dispatchProfessionalHistory] = useReducer(
        professionalHistoryReducer,
        professionallHistoryState
    )
    const [stateFamilyHistory, dispatchFamilyHistory] = useReducer(familyHistoryReducer, familyHistoryState)

    const history = {
        statePersonalHistory,
        dispatchPersonalHistory,
        stateProfessionalHistory,
        dispatchProfessionalHistory,
        stateFamilyHistory,
        dispatchFamilyHistory,
    }

    return (
        <div className={classes.Body}>
            <ChiefComplaints.Provider value={{ stateChief, dispatchChief }}>
                <Investigation.Provider value={{ stateInvestigation, dispatchInvestigation }}>
                    <Diagnosis.Provider value={{ stateDiagnosis, dispatchDiagnosis }}>
                        <History.Provider value={history}>
                            {/* {Context Wrapper} */}
                            <div>
                                <PreviewSection />
                            </div>
                            {/* Context only for Input Field */}
                            <Advice.Provider value={{ stateAdvice, dispatchAdvice }}>
                                <Next.Provider value={{ stateNext, dispatchNext }}>
                                    <div>
                                        <InputSection />
                                    </div>
                                </Next.Provider>
                            </Advice.Provider>
                            {/* Context only for Input Field */}
                            {/* {Context Wrapper} */}
                        </History.Provider>
                    </Diagnosis.Provider>
                </Investigation.Provider>
            </ChiefComplaints.Provider>
        </div>
    )
}

export default Body
