const Rbs = ({ arr }) => {
    let rbs = arr.filter((v) => v.key === 'rbs')
    return (
        <div>
            {rbs.length !== 0 ? (
                <li>
                    <div>
                        RBS{' '}
                        <span>
                            <b>{rbs[0].slot_flt4}</b> {rbs[0].unit}
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Rbs
