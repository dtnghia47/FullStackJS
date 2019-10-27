import { combineReducers } from 'redux';
import { reducer as post, PostState } from './post'

const reducer = combineReducers<RootState>({
  post,
})

export interface RootState {
  post: PostState,
}

export default reducer