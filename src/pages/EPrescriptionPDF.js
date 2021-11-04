import { PdfWrapped } from '../allContext'
import EpPDF from '../components/EpPDF/EpPDF'

const EPrescriptionPDF = () => {
    return (
        <div>
            <PdfWrapped.Provider>
                <EpPDF />
            </PdfWrapped.Provider>
        </div>
    )
}
export default EPrescriptionPDF
