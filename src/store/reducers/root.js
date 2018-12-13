import { LOGIN } from '../actions/actionTypes';

const initialState = {
    // Starting state
}

const reducer = (state= initialState, action) => {
     switch(action.type) {
         case Login:
            return {
                ...state
            }
         default:
            return state;
     }
}

export default reducer;