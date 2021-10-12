import classes from './Suggestion.module.css'

const Suggestion = ({ arr, setText }) => {
    return (
        <div className={classes.Suggestion}>
            {arr.length !== 0 ? (
                <ul>
                    {arr.map((value) => {
                        return (
                            <li key={value.id} onClick={() => setText(value.name)}>
                                {value.name}
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </div>
    )
}

export default Suggestion
