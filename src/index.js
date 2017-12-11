import React from 'react';
/**
 * Core Libraries
 */
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

/**
 * Components
 */
import App from './js/components/App';

/**
 * Store
 */
import store from './js/common/store';

/**
 * CSS
 */
import './css/common.css';

/**
 * Additional Modules
 */
import registerServiceWorker from './js/common/registerServiceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
