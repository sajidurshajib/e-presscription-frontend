const HeartRate = ({ heartRate }) => {
    return (
        <div>
            Heart rate{' '}
            <span>
                <b>{heartRate}</b> beats/min
            </span>
        </div>
    )
}

export default HeartRate
