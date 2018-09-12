import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
// import App from './ex/ex1';
// import App from './ex/ex2';
import registerServiceWorker from './registerServiceWorker';

function NumberList(props){
  const number = props.number;
  const list = number.map( (number,index) => {
    return <li key={index}>{number}</li>
  })
  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  )
}
const number = [1,2,3,4]
ReactDOM.render(
  <NumberList number={number} />,
  document.getElementById('root')
)
registerServiceWorker();
