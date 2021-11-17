import { Fragment, useContext } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const CoMorbidity = () => {
    const { stateCoMorbidity, dispatchCoMorbidity } = useContext(History)

    const del = (e) => {
        e.preventDefault()
        dispatchCoMorbidity({ type: 'remove' })
    }

    return (
        <div className={classes.HistoryPrev}>
            {stateCoMorbidity.coMorbidity.length ? (
                <Fragment>
                    <h4 className={classes.combrth}>Co-Morbidity</h4>
                    <button className={classes.del} onClick={(e) => del(e)}>
                        x
                    </button>
                    <ul className={classes.combrt}>
                        {stateCoMorbidity.coMorbidity.length
                            ? stateCoMorbidity.coMorbidity.map((v, i) => {
                                  return (
                                      <li key={i}>
                                          {v.title} <span>{v.remark}</span>
                                      </li>
                                  )
                              })
                            : null}
                    </ul>
                </Fragment>
            ) : null}
        </div>
    )
}

export default CoMorbidity
