import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { NotifycationProvider } from './NotifycationProvider';

ReactDOM.render(
	<NotifycationProvider>
		<App />
	</NotifycationProvider >, document.getElementById('root'));
registerServiceWorker();
