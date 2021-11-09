import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Table from './components/table';
import Goal from './components/goal';
import Run from './components/run';
import Clock from './components/clock';
import Events from './components/events';
import Samp from './components/mytable';
import StateData from './components/apptablestate';

/*
ReactDOM.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>,
  document.getElementById('root1')
);

ReactDOM.render(
  <React.StrictMode>
    <Goal isGoal={true} />
  </React.StrictMode>,
  document.getElementById('root2')
);

ReactDOM.render(
  <React.StrictMode>
    <Run isRun="45" />
  </React.StrictMode>,
  document.getElementById('root3')
);
ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById('root4')
);
ReactDOM.render(
  <React.StrictMode>
    <Events />
  </React.StrictMode>,
  document.getElementById('root5')
);

ReactDOM.render(
  <React.StrictMode>
    <Samp />
  </React.StrictMode>,
  document.getElementById('root6')
);
*/

ReactDOM.render(
  <React.StrictMode>
    <StateData />
  </React.StrictMode>,
  document.getElementById('root7')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
