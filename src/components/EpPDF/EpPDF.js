import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import classes from './EpPDF.module.css'
import { GeneratePDF } from './GeneratePDF/GeneratePDF'
import HeaderUpdate from './HeaderUpdate'

const EpPDF = () => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    const title = 'Patient Name'
    useEffect(() => {
        document.title = title
    }, [title])

    const [header, setHeader] = useState(false)

    return (
        <div className={classes.EpPDF}>
            <GeneratePDF ref={componentRef} />
            <div className={classes.btnGroup}>
                <Link to="/">Back</Link>
                <button onClick={() => setHeader(!header)}>Update prescription header</button>
                <button onClick={handlePrint}>Print</button>
            </div>
            <>{header ? <HeaderUpdate setter={setHeader} /> : null}</>
        </div>
    )
}

export default EpPDF
