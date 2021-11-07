import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import classes from './EpPDF.module.css'
import { GeneratePDF } from './GeneratePDF/GeneratePDF'

const EpPDF = () => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    const title = 'Patient Name'
    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <div className={classes.EpPDF}>
            <GeneratePDF ref={componentRef} />
            <div className={classes.btnGroup}>
                <Link to="/">Back</Link>
                <button onClick={handlePrint}>Print</button>
            </div>
        </div>
    )
}

export default EpPDF
