import classes from './SuggestionMedicine.module.css'

const SuggestionMedicine = ({ objArr, setObj }) => {
    return (
        <div className={classes.SuggestionMedicine}>
            {objArr.length ? (
                <ul>
                    {objArr.map((v, i) => {
                        return (
                            <li key={i} onClick={() => setObj(v)}>
                                {v.form + ' | ' + v.name + ' | ' + v.strength}
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </div>
    )
}

export default SuggestionMedicine
