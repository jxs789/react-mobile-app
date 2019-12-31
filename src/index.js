import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/index';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
