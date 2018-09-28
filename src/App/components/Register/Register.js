import React from 'react';
import { List, InputItem } from 'antd-mobile';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: 'text',
    }
    this.confirmHandle = this.confirmHandle.bind(this)
  }
  confirmHandle(){
    window.location.href='/'
  }
  render() {
    const { type } = this.state;
    return (
      <div>
        <List>
          <InputItem
            type={type}
            placeholder="请输入用户名/手机号/邮箱"
            clear
            moneyKeyboardAlign="left"
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          >用户名</InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码"
            clear
            moneyKeyboardAlign="left"
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          >密码</InputItem>
          <InputItem
            type="password"
            placeholder="请确认密码"
            clear
            moneyKeyboardAlign="left"
            moneyKeyboardWrapProps={moneyKeyboardWrapProps}
          >确认密码</InputItem>
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.confirmHandle}
            >
              确认
            </div>
          </List.Item>
        </List>
      </div>
    )
  }
}
export default App
