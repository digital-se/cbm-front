import { CHANGE_THEME } from '../actions/actions';

const initialState = {
    path: 'themes/theme-h.css'
}

const themesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                path: action.path
            }
        default:
            return state;
    }
}

export default themesReducer;