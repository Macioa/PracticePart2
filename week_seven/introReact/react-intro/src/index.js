import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello user='Monica' width="40px" src="https://78.media.tumblr.com/421b9294f4f9505f214f0666c9c8a15b/tumblr_mxwnmkiwuh1t6o9c1o1_500.gif" alt="img from jim"/>, document.getElementById('root'));
registerServiceWorker();
