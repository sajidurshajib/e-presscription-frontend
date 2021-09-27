import classes from './Suggestion.module.css'

const Suggestion = ({ arr, setText }) => {
    return (
        <div className={classes.Suggestion}>
            <ul>
                {arr.map((v, i) => {
                    return (
                        <li key={i} onClick={() => setText(v)}>
                            {v}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Suggestion
