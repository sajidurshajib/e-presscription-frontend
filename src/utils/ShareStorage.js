// const bifrostCors = require('bifrost-cors')
import bifrostCors from 'bifrost-cors'

export async function TakeStorage() {
    const as = new bifrostCors('http://localhost:3000', false)

    let bc = await as.getLocalStorage('auth')

    console.log(bc)

    as.getLocalStorage('auth')
        .then((value) => {
            console.log('Inside abc')
            console.log(value)
            return value
        })
        .catch((err) => {
            console.log(err)
        })
    console.log('done')
}
