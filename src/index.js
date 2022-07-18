import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//01-Layout-Components
// import App from './01-Layout-Components/App';

//02- Container Components
// import App from './02-Container-Components/App';

//03 - Controlled & Uncontrolled Components
//import App from './03-Controlled & Uncontrolled-Comps/App';

//04 - HOC
// import App from './04-Higher Order Components/App';

//05 - Custom Hook Pattern
// import App from './05-Custom-Hooks-Pattern/App';

//06-Functional Programming
import App from './06-FunctionalPrograming/App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
