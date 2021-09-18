import { Suspense } from 'react'
import Dashboard from '../components/Dashboard/Dashboard'

const EprescriptionPage = () => {
    return (
        <div>
            {/* added lazy loading */}
            <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
            </Suspense>
        </div>
    )
}

export default EprescriptionPage
