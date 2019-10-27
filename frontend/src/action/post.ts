
import {
    LOADING,
    GET_DATA_DONE,
    // GET_DATA_ERROR
} from '../const/types'

export const getList: Function = (params = {}) => {
    console.log(params)
    return dispatch => {
        dispatch({ type: LOADING });
        dispatch({
            type: GET_DATA_DONE,
            // data: ['a', 'b', 'c', 'd'],
            // data: [1, 2, 3, 4],
            data: [
                {
                    id: 1,
                    title: 'demo title 1',
                    description: 'desc 1'
                },
                {
                    id: 2,
                    title: 'demo title 2',
                    description: 'desc 2'
                }
            ],
        });
    };
};
