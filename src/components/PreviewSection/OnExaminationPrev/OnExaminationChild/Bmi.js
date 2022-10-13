const Bmi = ({ arr }) => {
    let bmi = arr.filter((v) => v.key === 'bmi')
    return (
        <div>
            {bmi.length !== 0 ? (
                <li>
                    <div>
                        BMI{' '}
                        <span>
                            <b>{bmi[0].slot_flt4}</b> {bmi[0].unit}
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Bmi
