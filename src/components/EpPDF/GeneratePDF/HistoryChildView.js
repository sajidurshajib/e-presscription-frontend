const HistoryChildView = ({ data, title }) => {
    return (
        <div>
            {data.length !== 0 ? (
                <p>
                    <b>{title} : </b>
                    {data.map((v, i, array) => (
                        <span key={i}>
                            {v.history}
                            {array.length !== i + 1 ? ', ' : null}
                        </span>
                    ))}
                </p>
            ) : null}
        </div>
    )
}

export default HistoryChildView
