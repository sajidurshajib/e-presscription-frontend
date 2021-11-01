import { PDFViewer } from '@react-pdf/renderer'
import classes from './EpPreview.module.css'
import PdfPreview from './PdfPreview/PdfPreview'

const EpPreview = () => {
    return (
        <div className={classes.EpPreview}>
            <PDFViewer width="595px" height="842px">
                <PdfPreview />
            </PDFViewer>
        </div>
    )
}

export default EpPreview
