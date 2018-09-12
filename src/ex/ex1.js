import React, { Component } from 'react';

function Welcome(props){
  return <h1>hello,{props.name}</h1>
}
// class Welcome extends React.Component {
//   render() {
//     return <h1>hello, {this.props.name}</h1>
//   }
// }
// let element = <Welcome name='stinghua' />
class App extends Component{
  render() {
    return (
      <div>
        <Welcome name="jason" />
        <Welcome name="tsinghua" />
      </div>
    )
  }
}
// class App extends Component {
//   render() {
//     return (
//       element
//     );
//   }
// }

export default App;
