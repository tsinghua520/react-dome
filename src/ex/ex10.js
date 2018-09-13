import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
// import App from './ex/ex1';
// import App from './ex/ex2';
import registerServiceWorker from './registerServiceWorker';

function FancyBorder(props){
  return (
    <div className={'FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
function WelcomeDialog(){
  return (
    <FancyBorder color='blue'>
      <h2>h2222222</h2>
    </FancyBorder>
  )
}
ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
)
registerServiceWorker();
// 组合（composition） vs 继承（Inheritance）