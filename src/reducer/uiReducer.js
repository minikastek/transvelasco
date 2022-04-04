import { types } from "../components/types/types";

const initialState = {
    msgError: 'null',
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.uiSetError:
          
            return {
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:

            return{
                ...state,
                msgError: null
            }

        default:
            return state;
    }
}
