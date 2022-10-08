const Oedema = ({ arr }) => {
    let oedema = arr.filter((v) => v.key === 'oedema')
    return (
        <div>
            {oedema.length !== 0 ? (
                <li>
                    <div>
                        Oedema <span>{oedema[0].slot_str7}</span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Oedema
