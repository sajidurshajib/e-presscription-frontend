import { useReducer } from 'react'
import { ChiefComplaints } from '../../allContext'
import { chiefState, chiefReducer } from '../../reducer/chiefReducer'
import InputSection from '../InputSection/InputSection'
import PreviewSection from '../PreviewSection/PreviewSection'
import classes from './Body.module.css'

const Body = () => {
    const [stateChief, dispatchChief] = useReducer(chiefReducer, chiefState)
    return (
        <div className={classes.Body}>
            <ChiefComplaints.Provider value={{ stateChief, dispatchChief }}>
                {/* {Context Wrapper} */}
                <div>
                    <PreviewSection />
                </div>
                <div>
                    <InputSection />
                </div>
                {/* {Context Wrapper} */}
            </ChiefComplaints.Provider>
        </div>
    )
}

export default Body
