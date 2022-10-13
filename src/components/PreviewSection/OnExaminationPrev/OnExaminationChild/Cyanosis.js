const Cyanosis = ({ arr }) => {
    let cyanosis = arr.filter((v) => v.key === 'cyanosis')
    return (
        <div>
            {cyanosis.length !== 0 ? (
                <li>
                    <div>
                        Cyanosis{' '}
                        <span>
                            <b>(+)</b> {cyanosis[0].slot_str7}
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Cyanosis
