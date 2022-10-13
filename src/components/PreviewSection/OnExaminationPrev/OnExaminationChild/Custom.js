const Custom = ({ arr }) => {
    let custom = arr.filter((v) => v.key === 'custom')
    return (
        <div>
            {custom.length !== 0 ? (
                <li>
                    <div>
                        Custom <span>{custom[0].slot_str7}</span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Custom
