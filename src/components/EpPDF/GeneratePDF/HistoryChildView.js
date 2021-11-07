const HistoryChildView = ({ st, lvl }) => {
    return (
        <div>
            {st.length !== 0 ? (
                <p>
                    <b>{lvl} :</b>
                    {st
                        .replace(/\n+$/, '')
                        .split('\n')
                        .map((v, i, arr) => {
                            return (
                                <span key={i}>
                                    {' '}
                                    {v}
                                    {arr.length - 1 === i ? '' : ', '}
                                </span>
                            )
                        })}
                </p>
            ) : null}
        </div>
    )
}

export default HistoryChildView
