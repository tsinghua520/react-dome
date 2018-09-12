//条件渲染
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
// import App from './ex/ex1';
// import App from './ex/ex2';
import registerServiceWorker from './registerServiceWorker';

function Mailbox(props){
  return (
    <div>
      {
        props.message.length>3 ? 
        <h2>这是我的多{props.message.length}</h2>
        :<h2>这是我的少{props.message.length}</h2>
      }
    </div>
  )
}
const message = ['message1','message2','message3'];
ReactDOM.render(
  <Mailbox message={message} />,
  document.getElementById('root')
)
registerServiceWorker();
