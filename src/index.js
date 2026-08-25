import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//var sname="Birundha"
//var marks=[77,88,99,100,67];
//var stud={rno:1001,sname:"Birundha",mark:60,result:"pass"?"pass":fail}
var stud={
  rno:1001,
  sname:"Brindha",
  marks:[99,77,88],
  result:null
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={stud}/>
  </React.StrictMode>
);


/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var tud={rno:1233,
  aname:"jagan",
  mark:[77,3,55,67],
  reult:"Pass",
  iseligible:false}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={tud} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
