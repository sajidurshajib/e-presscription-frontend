import classes from './PatientSearch.module.css'

const PatientSearch = ({ arr, setPatient, cross }) => {
    return (
        <div className={classes.PatientSearch}>
            <ul>
                {arr.map((v, i) => {
                    return (
                        <li
                            key={i}
                            onClick={() => {
                                setPatient({ type: 'input', payload: v })
                                cross()
                            }}>
                            {v.name} <span>{v.phone}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PatientSearch
