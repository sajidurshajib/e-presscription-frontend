const Temp = ({ temp }) => {
    return (
        <div>
            Temp{' '}
            <span>
                <b>{temp.value}</b> &deg; {temp.type}
            </span>
        </div>
    )
}

export default Temp
