import classes from './Advice.module.css'

const AdvicePrev = ({ advice, dispatchAdv }) => {
    const del = (e) => {
        e.preventDefault()
        dispatchAdv({ type: 'remove' })
    }

    return (
        <div className={classes.AdvicePrev}>
            {advice.length !== 0 ? (
                <button className={classes.del} onClick={(e) => del(e)}>
                    Clear All
                </button>
            ) : null}
            <ol>
                {advice.length !== 0
                    ? advice.split('\n').map((v, i) => {
                          return <li key={i}>{v}</li>
                      })
                    : null}
            </ol>
        </div>
    )
}

export default AdvicePrev
