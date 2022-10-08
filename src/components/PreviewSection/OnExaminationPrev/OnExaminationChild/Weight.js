const Weight = ({ arr }) => {
    let weight = arr.filter((v) => v.key === 'weight')
    return (
        <div>
            {weight.length !== 0 ? (
                <li>
                    <div>
                        Weight
                        <span>
                            <b>{weight[0].slot_flt4}</b> {weight[0].unit}
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Weight
