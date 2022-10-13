const Respiratory = ({ arr }) => {
    let resp = arr.filter((v) => v.key === 'respiratory')
    return (
        <div>
            {resp.length !== 0 ? (
                <li>
                    <div>
                        Respiratory{' '}
                        <span>
                            <b>{resp[0].slot_int1}</b> {resp[0].unit}
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Respiratory
