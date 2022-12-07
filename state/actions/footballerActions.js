export const getFootballersData = (playerData) => {
    return {
        type: "getUsers",
        payload: playerData
    }
}

export const createFootballPlayerProfile = (data) => {
    return {
        type: "createPlayer",
        payload: data
    }
}

export const updateFootballerData = (updatedData) => {
    return {
        type: "updatePlayer",
        payload: updatedData
    }
}