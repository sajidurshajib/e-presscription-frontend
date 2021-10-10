import classes from './DropDown.module.css'

const DropDown = ({ arr }) => {
    return (
        <div className={classes.DropDown}>
            <select name="" id="">
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
