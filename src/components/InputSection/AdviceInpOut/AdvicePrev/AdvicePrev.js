import classes from './Advice.module.css'

const AdvicePrev = ({ advice }) => {
    return (
        <div className={classes.AdvicePrev}>
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
