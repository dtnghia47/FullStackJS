import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer, { RootState } from './reducers';

let store

export const getStore = (state, isServer?): Store<RootState> => {
  if (isServer && typeof window === 'undefined') {
    return createStore<RootState, any, {}, undefined>(reducer, state, applyMiddleware(thunkMiddleware))
  } else {
    if (!store) {
      let middlewares = [thunkMiddleware];
      if (process.env.NODE_ENV !== 'production') {
        middlewares.push(
          createLogger({
            level: 'info',
            collapsed: true,
            stateTransformer: state => {
              let newState = {};

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
}
// import { Component } from 'react';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { createStore, applyMiddleware, compose } from 'redux';

// import rootReducer, { RootState } from './reducers';

// // redux thunk and redux logger
// function createMiddlewares() {
//     let middlewares = [thunkMiddleware];
//     // I just show log when development mode
//     if (process.env.NODE_ENV !== 'production') {
//         middlewares.push(
//             createLogger({
//                 level: 'info',
//                 collapsed: true,
//                 stateTransformer: state => {
//                     let newState = {};

//                     for (let i of Object.keys(state)) {
//                         newState[i] = state[i];
//                     }

//                     return newState;
//                 },
//             }),
//         );
//     }

//     return middlewares;
// }

// export const initializeStore = () => {
//     let middlewares = createMiddlewares();

//     return createStore(rootReducer, compose(applyMiddleware(...middlewares)));
// };

// export default App => {
//     return class AppWithRedux extends Component<RootState> {
//         constructor(props: any) {
//             super(props);
//             this.reduxStore = () => initializeStore();
//         }

//         // reduxStore: (state: RootState) => object;

//         render() {
//             return <App {...this.props} reduxStore={this.reduxStore} />;
//         }
//     };
// };
