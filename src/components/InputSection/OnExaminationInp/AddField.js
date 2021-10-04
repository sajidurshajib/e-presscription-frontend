import classes from './OnExaminationInp.module.css'

const AddField = ({ addData, add, setAdd }) => {
    return (
        <div className={classes.addField}>
            <form onSubmit={addData}>
                <input type="text" value={add} onChange={(e) => setAdd(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddField
