import classes from './TextField.module.css'

const TextField = ({ label, text, setText }) => {
    let lineBreak = text.split('\n')
    let count = lineBreak.length

    return (
        <div className={classes.TextField}>
            <form>
                <label htmlFor="">{label}</label>
                <textarea cols="50" rows={count + 1} value={text} onChange={(e) => setText(e.target.value)} required />
                <span></span>
            </form>
        </div>
    )
}

export default TextField
