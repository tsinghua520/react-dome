//非引用
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
// import App from './ex/ex1';
// import App from './ex/ex2';
import registerServiceWorker from './registerServiceWorker';

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOne:false}
    this.changeIsOne = this.changeIsOne.bind(this)
  }
  changeIsOne(){
    console.log(this)
    this.setState(
      {isOne: !this.state.isOne}
    )
  }
  render (){
    let element;
    const isOne = this.state.isOne;
    if(this.state.isOne){
      element = <div>element1</div>;
    }else{
      element = <div>element2</div>;
    }
    return (
      <div onClick={this.changeIsOne}>
        {element}
        { isOne ? 'isOne':'notIsOne'}
      </div>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)
registerServiceWorker();
