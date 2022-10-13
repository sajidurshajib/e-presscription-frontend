const BloodPressure = ({ arr }) => {
    let bp = arr.filter((v) => v.key === 'bp')
    return (
        <div>
            {bp.length !== 0 ? (
                <li>
                    <div>
                        BP
                        <span>
                            <b>
                                {bp[0].slot_int1}/{bp[0].slot_int2}
                            </b>{' '}
                            {bp[0].unit}
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default BloodPressure
