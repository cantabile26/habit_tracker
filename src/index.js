import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  //검사하기위함->배포시에는 두번씩 출력되지않음
  <React.StrictMode>
  <App />
  {/* <SimpleHabit /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


