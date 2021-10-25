export const EpGetStorage = (key) => {
    let data = localStorage.getItem(key)
    if (data) {
        return data
    } else {
        return false
    }
}

export const EpSetStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const EpDefStorage = (key, def) => {
    if (EpGetStorage(key) === false) {
        EpSetStorage(key, def)
    }
    return JSON.parse(EpGetStorage(key))
}
