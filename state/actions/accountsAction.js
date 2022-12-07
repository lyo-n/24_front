export const getAllAccounts = (playerData) => {
    return {
        type: "getUsers",
        payload: playerData
    }
}