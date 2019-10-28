import { Dispatch } from 'redux'
import { getListPost } from '../service/postService'
import {
    LOADING,
    // GET_DATA_DONE,
    // GET_DATA_ERROR
} from '../const/types'

export const getList: Function = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: LOADING });
        // dispatch({
        //     type: GET_DATA_DONE,
        //     // data: ['a', 'b', 'c', 'd'],
        //     // data: [1, 2, 3, 4],
        //     data: [
        //         {
        //             id: 1,
        //             title: 'demo title 1',
        //             description: 'desc 1'
        //         },
        //         {
        //             id: 2,
        //             title: 'demo title 2',
        //             description: 'desc 2'
        //         },
        //         {
        //             id: 3,
        //             title: 'demo title 3',
        //             description: 'desc 3'
        //         },
        //         {
        //             id: 4,
        //             title: 'demo title 4',
        //             description: 'desc 4'
        //         },
        //         {
        //             id: 5,
        //             title: 'demo title 5',
        //             description: 'desc 5'
        //         },
        //         {
        //             id: 6,
        //             title: 'demo title 6',
        //             description: 'desc 6'
        //         },
        //         {
        //             id: 7,
        //             title: 'demo title 7',
        //             description: 'desc 7'
        //         },
        //         {
        //             id: 8,
        //             title: 'demo title 8',
        //             description: 'desc 8'
        //         },
        //         {
        //             id: 9,
        //             title: 'demo title 9',
        //             description: 'desc 9'
        //         }
        //     ],
        // });
        return getListPost().then(res => {
            debugger
        }).catch(err => {
            debugger
        })
    };
};
