const BloodPressure = ({ bp }) => {
    return (
        <div>
            BP
            <span>
                <b>
                    {bp.diastolic}/{bp.systolic}
                </b>{' '}
                mm of Hg
            </span>
        </div>
    )
}

export default BloodPressure
