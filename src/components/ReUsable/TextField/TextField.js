import classes from './TextField.module.css'

const TextField = ({ label, text, setText }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        setText('')
    }

    let lineBreak = text.split('\n')
    let count = lineBreak.length

    return (
        <div className={classes.TextField}>
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="">{label}</label>
                <textarea
                    name=""
                    id=""
                    cols="50"
                    rows={count + 1}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
                <span></span>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default TextField
