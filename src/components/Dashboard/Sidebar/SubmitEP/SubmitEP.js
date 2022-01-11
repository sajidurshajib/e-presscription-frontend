import env from 'react-dotenv'
import { Link } from 'react-router-dom'
import { EpGetStorage } from '../../../../utils/EpLocalStorage'
import classes from './SubmitEP.module.css'

const SubmitEP = () => {
    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    // Patient info
    const patient = EpGetStorage('patient')
    const patientObj = JSON.parse(patient)
    //Chief Complaint6s
    const cc = EpGetStorage('chiefcomplaints')
    const ccObj = JSON.parse(cc)
    //Investigation
    const inv = EpGetStorage('investigation')
    const invObj = JSON.parse(inv)
    //Medicine
    const mdcn = EpGetStorage('medicine')
    const mdcnObj = JSON.parse(mdcn)
    //Advice
    const advc = EpGetStorage('advice')
    const advcObj = JSON.parse(advc)
    //History
    //Personal
    const prsnl = EpGetStorage('presonalHistory')
    const prsnlObj = JSON.parse(prsnl)
    //Professional
    const prf = EpGetStorage('professionalHistory')
    const prfObj = JSON.parse(prf)
    //Family
    const fml = EpGetStorage('familyHistory')
    const fmlObj = JSON.parse(fml)
    //drug
    const drg = EpGetStorage('drugHistory')
    const drgObj = JSON.parse(drg)
    //Medical
    const mdcl = EpGetStorage('medicalHistory')
    const mdclObj = JSON.parse(mdcl)
    //Vaccination
    const vcc = EpGetStorage('vaccinationHistory')
    const vccObj = JSON.parse(vcc)
    //Co-Morbidity
    const cmbdt = EpGetStorage('coMorbidity')
    const cmbdtObj = JSON.parse(cmbdt)
    // Next followup
    const next = EpGetStorage('next')
    const nextObj = JSON.parse(next)
    //On-Examination
    const onExam = EpGetStorage('onexam')
    const onExamObj = JSON.parse(onExam)

    //Need if else log
    const submit = async () => {
        // Prescription Data
        let prescriptionsResponse = await fetch(`${api}/prescriptions/`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            method: 'POST',
            body: JSON.stringify({
                name: patientObj.patient.name,
                age: patientObj.patient.age,
                sex: patientObj.patient.sex,
                address: patientObj.patient.address,
                phone: patientObj.patient.phone,
                // appointment_id: 244,
            }),
        })
        let prescription = await prescriptionsResponse.json()

        // Chief Complaints Data
        // let ccResponse = await fetch(`${api}/prescriptions/${prescription.id}/chief-complaints`, {
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     dataType: 'json',
        //     method: 'POST',
        //     body: JSON.stringify({
        //         complain: ccObj.cc,
        //     }),
        // })
        // let cc = await ccResponse.json()

        //Investigation
        // if (invObj.inv.length !== 0) {
        //     let investigationResponse = await fetch(`${api}/prescriptions/${prescription.id}/tests`, {
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         dataType: 'json',
        //         method: 'POST',
        //         body: JSON.stringify({
        //             test: invObj.inv,
        //             // remarks: invObj,
        //         }),
        //     })
        //     let investigation = await investigationResponse.json()
        // }

        //Medicine
        // mdcnObj.medicine.map(async (v, i) => {
        //     let medicineResponse = await fetch(`${api}/prescriptions/${prescription.id}/medicines`, {
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         dataType: 'json',
        //         method: 'POST',
        //         body: JSON.stringify({
        //             medicine: {
        //                 name: v.name,
        //                 generic: v.generic,
        //                 strength: v.strength,
        //                 form: v.form,
        //                 price: 0,
        //             },
        //             dosage: v.doses,
        //             after_meal: v.after,
        //             duration: 0,
        //             remarks: v.remark,
        //         }),
        //     })
        //     let medicine = await medicineResponse.json()
        // })

        //Advice
        // let adviceResponse = await fetch(`${api}/prescriptions/${prescription.id}/advices`, {
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     dataType: 'json',
        //     method: 'POST',
        //     body: JSON.stringify({
        //         advice: advcObj.adv,
        //     }),
        // })
        // let advice = await adviceResponse.json()

        //History
        //Personal
        // prsnlObj.personal
        //     .replace(/\n+$/, '')
        //     .split('\n')
        //     .map(async (v, i) => {
        //         let personalResponse = await fetch(`${api}/prescriptions/${prescription.id}/details`, {
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             dataType: 'json',
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 data_type: 'history',
        //                 data: {
        //                     name: 'personal',
        //                     remarks: v,
        //                 },
        //             }),
        //         })
        //         let personal = await personalResponse.json()
        //     })

        //Professional
        // prfObj.professional
        //     .replace(/\n+$/, '')
        //     .split('\n')
        //     .map(async (v, i) => {
        //         let professionalResponse = await fetch(`${api}/prescriptions/${prescription.id}/details`, {
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             dataType: 'json',
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 data_type: 'history',
        //                 data: {
        //                     name: 'professional',
        //                     remarks: v,
        //                 },
        //             }),
        //         })
        //         let professional = await professionalResponse.json()
        //     })

        //Family
        // fmlObj.family
        //     .replace(/\n+$/, '')
        //     .split('\n')
        //     .map(async (v, i) => {
        //         let familyResponse = await fetch(`${api}/prescriptions/${prescription.id}/details`, {
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             dataType: 'json',
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 data_type: 'history',
        //                 data: {
        //                     name: 'family',
        //                     remarks: v,
        //                 },
        //             }),
        //         })
        //         let family = await familyResponse.json()
        //     })

        //Drug
        // drgObj.drug
        //     .replace(/\n+$/, '')
        //     .split('\n')
        //     .map(async (v, i) => {
        //         let drugResponse = await fetch(`${api}/prescriptions/${prescription.id}/details`, {
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             dataType: 'json',
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 data_type: 'history',
        //                 data: {
        //                     name: 'drug',
        //                     remarks: v,
        //                 },
        //             }),
        //         })
        //         let drug = await drugResponse.json()
        //     })

        //Medical
        // mdclObj.medical
        //     .replace(/\n+$/, '')
        //     .split('\n')
        //     .map(async (v, i) => {
        //         let medicalResponse = await fetch(`${api}/prescriptions/${prescription.id}/details`, {
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             dataType: 'json',
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 data_type: 'history',
        //                 data: {
        //                     name: 'medical',
        //                     remarks: v,
        //                 },
        //             }),
        //         })
        //         let medical = await medicalResponse.json()
        //     })

        //Vaccination
        // vccObj.vaccination
        //     .replace(/\n+$/, '')
        //     .split('\n')
        //     .map(async (v, i) => {
        //         let vaccinationResponse = await fetch(`${api}/prescriptions/${prescription.id}/details`, {
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             dataType: 'json',
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 data_type: 'history',
        //                 data: {
        //                     name: 'vaccination',
        //                     remarks: v,
        //                 },
        //             }),
        //         })
        //         let vaccination = await vaccinationResponse.json()
        //     })

        //Co-Morbidity
        // const CoMorbidityTitle = {
        //     htn: 'hypertension',
        //     dm: 'diabetes',
        //     tb: 'tuberculosis',
        //     asm: 'asthma',
        // }

        // if (cmbdtObj.coMorbidity.length !== 0) {
        //     cmbdtObj.coMorbidity.map(async (v, i) => {
        //         let cmbdtResponse = await fetch(`${api}/prescriptions/${prescription.id}/details`, {
        //             headers: {
        //                 Accept: 'application/json',
        //                 'Content-Type': 'application/json',
        //             },
        //             dataType: 'json',
        //             method: 'POST',
        //             body: JSON.stringify({
        //                 data_type: 'co-morbidity',
        //                 data: {
        //                     name: CoMorbidityTitle[v.name],
        //                     remarks: v.remark,
        //                 },
        //             }),
        //         })
        //         let coMorbiidty = await cmbdtResponse.json()
        //     })
        // }

        //Next follow-up
        // let nextResponse = await fetch(`${api}/prescriptions/${prescription.id}`, {
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     dataType: 'json',
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         follow_up_date: nextObj.nxt,
        //     }),
        // })
        // let nextF = await nextResponse.json()

        //On-Examination
        if (onExamObj.onexam.length !== 0) {
            for (const [key, value] of Object.entries(onExamObj.onexam)) {
                let data = {}
                if (key === 'bloodPressure') {
                    data = {
                        high: value.diastolic,
                        low: value.systolic,
                    }
                } else if (key === 'height') {
                    const heightValue = value.feet * 12 + value.inch
                    data = {
                        value: heightValue,
                        unit: 'inch',
                    }
                } else if (key === 'weight') {
                    let weightValue = value.value
                    let type = value.type
                    if (type === 'lbs') {
                        weightValue = value.value * 0.4535
                        type = 'kg'
                    }

                    data = {
                        value: weightValue,
                        unit: type,
                    }
                } else if (key === 'rbs') {
                    data = {
                        value: value,
                    }
                } else {
                    let stringifiedValue = '' + value
                    if (typeof value === 'object') {
                        let temp = ''
                        for (const [key, value2] of Object.entries(value)) {
                            temp += value2
                        }

                        stringifiedValue = temp
                    }

                    data = {
                        field: key,
                        value: stringifiedValue,
                    }
                }

                let onExaminationResponse = await fetch(`${api}/prescriptions/${prescription.id}/details`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    dataType: 'json',
                    method: 'POST',
                    body: JSON.stringify({
                        data_type: 'on-examination',
                        data,
                    }),
                })
                let onExamination = await onExaminationResponse.json()
                console.log(onExamination)
            }
        }
    }

    return (
        <div className={classes.SubmitEP}>
            <Link to="/ep" target="_blank">
                <button onClick={submit}>Create Prescription</button>
            </Link>
        </div>
    )
}

export default SubmitEP
