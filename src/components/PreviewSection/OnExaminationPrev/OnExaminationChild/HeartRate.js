const HeartRate = ({ arr }) => {
    let heartRate = arr.filter((v) => v.key === 'heartRate')
    return (
        <div>
            {heartRate.length !== 0 ? (
                <li>
                    <div>
                        Heart rate{' '}
                        <span>
                            <b>{heartRate[0].slot_int1}</b> {heartRate[0].unit}
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default HeartRate
