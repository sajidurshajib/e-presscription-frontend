import classes from './Suggestion.module.css'

const Suggestion = ({ arr, setText }) => {
    return (
        <div className={classes.Suggestion}>
            {arr.length !== 0 ? (
                <ul>
                    {arr.map((v, i) => {
                        return (
                            <li key={i} onClick={() => setText(v)}>
                                {v}
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </div>
    )
}

export default Suggestion
