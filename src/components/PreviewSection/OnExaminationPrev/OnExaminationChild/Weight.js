const Weight = ({ weight }) => {
    return (
        <div>
            Weight
            <span>
                <b>{weight.value}</b> {weight.type}
            </span>
        </div>
    )
}

export default Weight
