import classes from './DropDown.module.css'

const DropDown = ({ arr, drop, setDrop }) => {
    return (
        <div className={classes.DropDown}>
            <select value={drop} onChange={(e) => setDrop(e.target.value)}>
                {arr.map((v, i) => {
                    return (
                        <option key={i} value={v.value}>
                            {v.name}
                        </option>
                    )
                })}
            </select>
            <span></span>
        </div>
    )
}

export default DropDown
