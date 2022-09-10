const dob = (dateString = '0-0-0') => {
    let arrDateString = dateString.split('-')
    let year = parseInt(arrDateString[0])
    let month = parseInt(arrDateString[1])
    let date = parseInt(arrDateString[2])

    let currentYear = new Date().getFullYear()
    let currentMonth = new Date().getMonth() + 1
    let currentDate = new Date().getDate()

    let resYear = 0
    let resMonth = 0
    let resDate = 0

    if (currentDate >= date) {
        resDate = currentDate - date
    } else {
        let current = currentDate + monthDayCount(currentMonth, leapYear(currentYear))
        currentMonth -= 1
        resDate = current - date
    }

    if (currentMonth >= month) {
        resMonth = currentMonth - month
    } else {
        resMonth = currentMonth + 12 - month
        currentYear -= 1
    }

    resYear = currentYear - year

    return [resYear, resMonth, resDate]
}

const monthDayCount = (month, leapYear) => {
    let leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let notLeap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (leapYear === true) {
        return leap[month - 1]
    } else {
        return notLeap[month - 1]
    }
}

const leapYear = (y) => {
    if (y % 400 === 0) {
        return true
    } else {
        if ((y % 4 === 0) & (y % 100 !== 0)) {
            return true
        } else {
            return false
        }
    }
}

export { dob }
