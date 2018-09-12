import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
// import App from './ex/ex1';
import App from './ex/ex3';
import registerServiceWorker from './registerServiceWorker';
// function Clock(props) {
//   return (
//     <div>
//       <h1>this is my time</h1>
//       <h2>{props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>this is my time!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
function tick() {
  ReactDOM.render(
    <Clock />, 
    document.getElementById('root'))
}
setInterval(tick, 1000)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
