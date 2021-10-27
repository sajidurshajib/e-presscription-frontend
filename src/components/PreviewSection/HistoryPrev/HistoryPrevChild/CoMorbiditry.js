import { Fragment, useContext } from 'react'
import { History } from '../../../../allContext'
import classes from './HistoryPrevChild.module.css'

const CoMorbidity = () => {
    const { stateCoMorbidity } = useContext(History)
    return (
        <div className={classes.HistoryPrev}>
            {stateCoMorbidity.coMorbidity.length ? (
                <Fragment>
                    <h4 className={classes.combrth}>Co-Morbidity</h4>
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
