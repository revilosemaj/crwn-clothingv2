import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducers'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()
const Middlewares = [sagaMiddleware] 

if(process.env.NODE_ENV === 'development') {
    Middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...Middlewares))
sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }