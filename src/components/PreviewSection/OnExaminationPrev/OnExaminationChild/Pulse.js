const Pulse = ({ arr }) => {
    let pulse = arr.filter((v) => v.key === 'pulse')
    return (
        <div>
            {pulse.length !== 0 ? (
                <li>
                    <div>
                        Pulse{' '}
                        <span>
                            <b>{pulse[0].slot_int1}</b> {pulse[0].unit}
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Pulse
