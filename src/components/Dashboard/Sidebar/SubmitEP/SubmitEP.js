// import { Link } from 'react-router-dom'
// import { EpGetStorage } from '../../../../utils/EpLocalStorage'
import { useReducer } from 'react'
import { chiefState, chiefReducer } from '../../../../reducer/chiefReducer'
import classes from './SubmitEP.module.css'

const SubmitEP = () => {
    const [stateChiefComplaints, dispatchChiefComplaints] = useReducer(chiefReducer, chiefState)

    const apiV1 = process.env.REACT_APP_API_V1

    let ccList = [
        ...stateChiefComplaints.cc.split('\n').map((cc) => ({
            chief_complaints: cc,
        })),
    ]
    console.log(ccList)

    const submit = async (e) => {
        e.preventDefault()
        const epSubmitByFetch = await fetch(`${apiV1}/ep`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            origin: '*',
            method: 'POST',
            body: JSON.stringify({
                doctor_id: 1,
                patient_id: 1,
                chief_complaints: [...ccList],
            }),
        })
        if (epSubmitByFetch.ok) {
            const data = await epSubmitByFetch.json()
            console.log(data)
        }
    }

    return (
        <div className={classes.SubmitEP}>
            {/* <Link to="/ep" target="_blank">
                <button>Create Prescription</button>
            </Link> */}
            <button onClick={(e) => submit(e)}>Create Prescription</button>
        </div>
    )
}

export default SubmitEP
