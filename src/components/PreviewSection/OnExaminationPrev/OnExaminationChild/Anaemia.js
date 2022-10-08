const Anaemia = ({ arr }) => {
    let anaemia = arr.filter((v) => v.key === 'anaemia')
    return (
        <div>
            {anaemia.length !== 0 ? (
                <li>
                    <div>
                        Anaemia <span>{anaemia[0].slot_str7}</span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Anaemia
