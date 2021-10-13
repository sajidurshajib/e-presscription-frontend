import ChiefComplaintsPrev from './ChiefComplaintsPrev/ChiefComplaintsPrev'
import DiagnosisPrev from './DiagnosisPrev/DiagnosisPrev'
import HistoryPrev from './HistoryPrev/HistoryPrev'
import InvestigationPrev from './InvestigationPrev/InvestigationPrev'
import OnExaminationPrev from './OnExaminationPrev/OnExaminationPrev'
import classes from './PreviewSection.module.css'

const PreviewSection = () => {
    return (
        <div className={classes.PreviewSection}>
            <h3>Preview</h3>
            <ChiefComplaintsPrev />
            <HistoryPrev />
            <OnExaminationPrev />
            <InvestigationPrev />
            <DiagnosisPrev />
        </div>
    )
}

export default PreviewSection
