const Height = ({ arr }) => {
    let height = arr.filter((v) => v.key === 'height')
    return (
        <div>
            {height.length !== 0 ? (
                <li>
                    <div>
                        Height
                        <span>
                            <b>{Math.floor(height[0].slot_int1 / 12)}</b> feet{' '}
                            <b>{Math.ceil(height[0].slot_int1 % 12)}</b> inch
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Height
