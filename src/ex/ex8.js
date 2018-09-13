import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
// import App from './ex/ex1';
// import App from './ex/ex2';
import registerServiceWorker from './registerServiceWorker';

class NameFrom extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {value:''}
  }
  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <form>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
      </form>
    )
  }
}
ReactDOM.render(
  <NameFrom />,
  document.getElementById('root')
)
registerServiceWorker();
