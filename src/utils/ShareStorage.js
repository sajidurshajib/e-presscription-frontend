export function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length

    while (i--) {
        localStorage.getItem(keys[i])
        values.push(localStorage.getItem(keys[i]))
    }

    values.forEach((item, index) => {
        if (typeof JSON.parse(item).authSite !== 'undefined') {
        }
    })

    return values
}
