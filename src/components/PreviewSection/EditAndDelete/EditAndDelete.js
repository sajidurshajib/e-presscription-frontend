import classes from './EditAndDelete.module.css'

const EditAndDelete = ({ editValue, value }) => {
    return (
        <div className={classes.EditAndDelete}>
            <div className={classes.modal}>
                <button className={classes.cross} onClick={() => editValue(null)}>
                    x
                </button>
                <form>
                    <input type="text" value={value.v} onChange={(e) => editValue({ v: e.target.value })} />
                    <div className={classes.btnGrp}>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditAndDelete
