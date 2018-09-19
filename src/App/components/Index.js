import React, { Component } from 'react';
import axios from 'axios'
import { Button, NavBar, Icon } from 'antd-mobile';
import apis from '../../static/js/api'
function Welcome(props){
  return <h1>hello,{props.name}</h1>
}
class App extends Component{
  componentDidMount() {
    axios.post(apis.getAdByPlace,{acId: 101})
      .then( (res) => {
        console.log(res)
      })
  }
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent="Back"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
        <Welcome name="jason" />
        <Welcome name="tsinghua" />
        <Button>Start</Button>
        <Button type="primary">Start</Button>
      </div>
    )
  }
}

export default App;
