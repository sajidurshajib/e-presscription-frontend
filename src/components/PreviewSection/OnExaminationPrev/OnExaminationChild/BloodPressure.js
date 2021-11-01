const BloodPressure = ({ bp }) => {
    return (
        <div>
            BP
            <span>
                <b>
                    {bp.systolic}/{bp.diastolic}
                </b>{' '}
                mm of Hg
            </span>
        </div>
    )
}

export default BloodPressure
