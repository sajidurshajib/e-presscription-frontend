import { useState } from 'react'
import classes from './DiagnosisPrev.module.css'

const DiagnosisPrev = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <div className={classes.DiagnosisPrev}>
            <h3 onClick={() => setToggle(!toggle)} className={toggle ? classes.toggle : null}>
                Diagnosis
            </h3>
            {toggle ? (
                <>
                    <div className={classes.diagnosis}>
                        <div className={classes.probable}>
                            <h4>Probable</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure sit nam fuga ullam.
                                Autem similique, laudantium et totam repudiandae consequuntur nisi odit alias, earum
                                dolorum, maxime mollitia veritatis quo!
                            </p>
                        </div>
                        <div className={classes.confirmatory}>
                            <h4>Confirmatory</h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe rerum ea eum distinctio
                                earum illo mollitia doloremque dolor temporibus molestiae.
                            </p>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}
export default DiagnosisPrev
