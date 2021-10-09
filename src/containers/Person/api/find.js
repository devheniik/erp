import axios from '@axios'
// import toast
export default async function (id) {
    try {
        const data = await axios.get(`personas/${id}`)
        console.log(data.data)
    } catch (error) {
        console.log(error)
    } finally { 

        return {
            firstName: 'djddijdij',
            lastName: null,
            patronymic: null,
            birthday: null,
            phoneNumber: null,
            email: null,
            sex: null,
            region: null,
            passportSeria: null,
            passportNumber: null,
            whoGive: null,
            dataGet: null,
            inn: null,
            adressReg: null,
            adressHome: null,
            birthPlace: null,
            add: null,
            mol: null,
            isSecret: null,
            organisatiom: null,
            inspector: null,
            position: null,
            departament: null,
            notakter: null,
            candidate: null,
            isFired: null,
            personal: null,

            operation: null,
            dataSelect: null,
            order: 'dddudu',
            delivery: null,
            status: null,
            ctgCost: null,
            resource: null,
            organisation: null,
            person: null,
            resource: null,
            filial: null,
            manager: null,
            layer: null,
            project: null,
            whoAdd: null,
            typeofDoc: null,
            numDoc: null,
            base: null,
            barcode: null,
            sum: null,
            sumBal: null,
            suminGrn: null,
            currency: null,
            currencyValue: null,
            currencyValueGrn: null,
            ndcprocent: null,
            ndc: null
        }
    }
}