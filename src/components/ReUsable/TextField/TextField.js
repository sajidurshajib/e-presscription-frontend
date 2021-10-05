import classes from './TextField.module.css'

const TextField = ({ label, text, setText }) => {
    const onSubmit = (e) => {
        e.preventDefault()
        setText('')
    }
    return (
        <div className={classes.TextField}>
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="">{label}</label>
                <textarea name="" id="" cols="50" rows="4" onChange={(e) => setText(e.target.value)}>
                    {text}
                </textarea>
            </form>
        </div>
    )
}

export default TextField
