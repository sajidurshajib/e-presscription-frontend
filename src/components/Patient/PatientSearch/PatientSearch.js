import classes from './PatientSearch.module.css'

const PatientSearch = ({ arr, setPatient, setName }) => {
    return (
        <div className={classes.PatientSearch}>
            <ul>
                {arr.map((v, i) => {
                    return (
                        <li
                            key={i}
                            onClick={async () => {
                                await setPatient({ type: 'input', payload: v })
                                setName(v.name)
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
