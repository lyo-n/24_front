import { useSelector } from "react-redux"

const initialState = {
    accounts: [],
    loading: true
}

const accountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getUsers":
            return {
                ... state,
                accountsData: action.payload,
                loading: false
            }

        default: 
            return state    
    }
}

export default accountsReducer;