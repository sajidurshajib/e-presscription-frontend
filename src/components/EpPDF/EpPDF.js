import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import classes from './EpPDF.module.css'
import { GeneratePDF } from './GeneratePDF/GeneratePDF'

const EpPDF = () => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div className={classes.EpPDF}>
            <GeneratePDF ref={componentRef} />
            <button onClick={handlePrint}>Print</button>
        </div>
    )
}

export default EpPDF
