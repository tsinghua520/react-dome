import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
// import App from './ex/ex1';
// import App from './ex/ex2';
import registerServiceWorker from './registerServiceWorker';

function UserGreeting(props){
  return <h1>welcome user!</h1>
  
}
function GuestGreeting(props){
  return <h2>welcome guest!</h2>
}
function Greeting(props){
  if(props.isLogin){
    return <UserGreeting />
  }else{
    return <GuestGreeting />
  }
}
class LoginControl extends React.Component {
  constructor(props){
    super(props)
    this.handleToLogin = this.handleToLogin.bind(this)
    this.handleToLoginOut = this.handleToLoginOut.bind(this)
    this.state = {isLogin:false}
  }
  handleToLogin(){
    this.setState({isLogin:true})
  }
  handleToLoginOut(){
    this.setState({isLogin:false})
  }
  render(){
    const is = this.state.isLogin
    let button;
    if(is){
      button = <button onClick={this.handleToLoginOut}>login out</button>
    }else{
      button = <button onClick={this.handleToLogin}>login in</button>
    }
    return (
      <div>
        <Greeting isLogin={is} />
        {button}
      </div>
    );
  }
}
ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
)
registerServiceWorker();
