import classes from './TextField.module.css'

const TextField = ({ label, text, setText }) => {
    let lineBreak = text.split('\n')
    let count = lineBreak.length

    return (
        <div className={classes.TextField}>
            <form>
                <textarea cols="50" rows={count} value={text} onChange={(e) => setText(e.target.value)} required />
                <span></span>
                <label htmlFor="">{label}</label>
            </form>
        </div>
    )
}

export default TextField
