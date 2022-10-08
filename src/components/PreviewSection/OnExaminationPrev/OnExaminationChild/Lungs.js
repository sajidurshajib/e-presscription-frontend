const Lungs = ({ arr }) => {
    let lungs = arr.filter((v) => v.key === 'lungs')
    return (
        <div>
            {lungs.length !== 0 ? (
                <li>
                    <div>
                        Lungs <span>{lungs[0].slot_str7}</span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Lungs
