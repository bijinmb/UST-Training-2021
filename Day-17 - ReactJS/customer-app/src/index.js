import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateData from './components/cust-setdata';
import Clockapp from './components/lifecycle';
import TempCalc from './components/temp-calc';
import Counter from './components/use-effect-demo';
import Component1 from './components/context-demo';
import Game1 from './components/game1';
import Gamepanel from './components/game-panel';
import Appuseref from './components/use-ref-demo';
import Todos from './components/use-reduce-demo';
import Student from './components/stud-state-hook-demo';
import Usecallbackapp from './components/usecallback-index';
import UseMemoApp from './components/usememo-demo';
import ToolbarApp from './components/customhook-demo';
import App1 from './components/stud-state-hook-demo';






ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('root1')
);
/*
ReactDOM.render(
  <React.StrictMode>
    <ToolbarApp />
  </React.StrictMode>,
  document.getElementById('root1')
);

ReactDOM.render(
  <React.StrictMode>
    <UseMemoApp />
  </React.StrictMode>,
  document.getElementById('root1')
);
/*
ReactDOM.render(
  <React.StrictMode>
    <Usecallbackapp />
  </React.StrictMode>,
  document.getElementById('root1')
);
/*
ReactDOM.render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>,
  document.getElementById('root1')
);
/*
ReactDOM.render(
  <React.StrictMode>
    <Clockapp />
  </React.StrictMode>,
  document.getElementById('root2')
); 

ReactDOM.render(
  <React.StrictMode>
    <TempCalc/>
  </React.StrictMode>,
  document.getElementById('root3')
);

ReactDOM.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>,
  document.getElementById('root4')
);

ReactDOM.render(
  <React.StrictMode>
    <Component1 />
  </React.StrictMode>,
  document.getElementById('root2')
);

ReactDOM.render(
  <React.StrictMode>
    <Game1 />
  </React.StrictMode>,
  document.getElementById('root2')
);

ReactDOM.render(
  <React.StrictMode>
    <Gamepanel />
  </React.StrictMode>,
  document.getElementById('root2')
);

ReactDOM.render(
  <React.StrictMode>
    <Appuseref />
  </React.StrictMode>,
  document.getElementById('root2')
);

ReactDOM.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>,
  document.getElementById('root2')
);

ReactDOM.render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>,
  document.getElementById('root2')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
