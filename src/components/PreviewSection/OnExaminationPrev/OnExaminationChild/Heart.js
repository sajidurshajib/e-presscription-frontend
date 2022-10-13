const Heart = ({ arr }) => {
    let heart = arr.filter((v) => v.key === 'heart')
    return (
        <div>
            {heart.length !== 0 ? (
                <li>
                    <div>
                        Heart <span>{heart[0].slot_str7}</span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Heart
