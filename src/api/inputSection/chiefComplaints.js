const searchChiefComplaints = async (api) => {
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

export { searchChiefComplaints }
