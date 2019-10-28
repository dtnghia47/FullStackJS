import { applyMiddleware, compose, createStore, Store, Middleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer, { RootState } from './reducers';

let store: any

export const getStore = (state?: object): Store<RootState> => {
  if (!store) {
    let middlewares: Array<Middleware> = [thunkMiddleware];
    if (process.env.NODE_ENV !== 'production') {
      middlewares.push(
        createLogger({
          level: 'info',
          collapsed: true,
          stateTransformer: state => {
            let newState: any = {};

            for (let i of Object.keys(state)) {
              newState[i] = state[i];
            }

            return newState;
          },
        }),
      );
    }

    store = createStore<RootState, any, {}, undefined>(
      reducer,
      state,
      compose(applyMiddleware(...middlewares))
    )
  }
  return store
}