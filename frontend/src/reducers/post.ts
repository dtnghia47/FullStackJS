import { Reducer } from 'redux'

import {
    LOADING,
    GET_DATA_DONE,
    // GET_DATA_ERROR
} from '../const/types'

export interface PostState {
    loading: boolean,
    data: Array<object>
}


const initialState = {
    loading: false,
    data: []
} as PostState

export const reducer: Reducer<PostState> = (state = initialState, action) => {
    const { type } = action
    switch (type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_DATA_DONE:
            return {
                ...state,
                data: action.data,
            }
        default:
            return state
    }
}

// export function loading() {
//     return {
//         type: LOADING,
//         loading: true
//     }
// }
