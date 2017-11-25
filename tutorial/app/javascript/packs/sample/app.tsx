import  * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import addCounterReducer from './reducers';
import App from './components/App';

let store = createStore(addCounterReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
