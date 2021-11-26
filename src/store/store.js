import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialData from '../data.json';

const data = {
    invoice: initialData
};

export default function configureStore(initialState = data) {
    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};