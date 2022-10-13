const getFromAPI = async (api) => {
    try {
        const response = await fetch(`${api}`)
        if (response.ok) {
            const data = await response.json()
            return data
        }
    } catch (err) {
        return err
    }
}

const getWithAuthToken = async (api, token) => {
    try {
        const response = await fetch(`${api}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: 'GET',
        })
        if (response.ok) {
            const data = await response.json()
            return data
        }
    } catch (err) {
        return err
    }
}

export { getFromAPI, getWithAuthToken }
