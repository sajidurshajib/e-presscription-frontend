const Temp = ({ arr }) => {
    let temp = arr.filter((v) => v.key === 'temp')
    return (
        <div>
            {temp.length !== 0 ? (
                <li>
                    <div>
                        Temp{' '}
                        <span>
                            <b>{temp[0].slot_int1}</b> &deg; {temp[0].unit}
                        </span>
                    </div>
                </li>
            ) : null}
        </div>
    )
}

export default Temp
