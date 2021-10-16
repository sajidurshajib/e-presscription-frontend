import { useReducer } from 'react'
import { ChiefComplaints, Investigation } from '../../allContext'
import { chiefState, chiefReducer } from '../../reducer/chiefReducer'
import { investigationReducer, investigationState } from '../../reducer/investigationReducer'
import InputSection from '../InputSection/InputSection'
import PreviewSection from '../PreviewSection/PreviewSection'
import classes from './Body.module.css'

const Body = () => {
    const [stateChief, dispatchChief] = useReducer(chiefReducer, chiefState)
    const [stateInvestigation, dispatchInvestigation] = useReducer(investigationReducer, investigationState)
    return (
        <div className={classes.Body}>
            <ChiefComplaints.Provider value={{ stateChief, dispatchChief }}>
                <Investigation.Provider value={{ stateInvestigation, dispatchInvestigation }}>
                    {/* {Context Wrapper} */}
                    <div>
                        <PreviewSection />
                    </div>
                    <div>
                        <InputSection />
                    </div>
                    {/* {Context Wrapper} */}
                </Investigation.Provider>
            </ChiefComplaints.Provider>
        </div>
    )
}

export default Body
