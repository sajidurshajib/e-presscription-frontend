const Jaundice = ({ arr }) => {
    let jaundice = arr.filter((v) => v.key === 'jaundice')
    return (
        <div>
            {jaundice.length !== 0 ? (
                <li>
                    <div>
                        Jaundice <span>{jaundice[0].slot_str7}</span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Jaundice
