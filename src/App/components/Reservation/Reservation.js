import React from 'react'
import { DatePicker, InputItem, Button, Toast, WingBlank, List } from 'antd-mobile';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: now,
      username:'',
      value: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onChange = (value) => {
    this.setState({
      value,
    });
  }
  handleUsername = (username) => {
    this.setState({
      username,
    });
  }
  handleSubmit() {
    console.log('submit');
    Toast.success('预订成功', 1);
  }
  render() {
    return (
      <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
       <InputItem
            type="text"
            placeholder="请输入用户名"
            onChange={this.handleUsername}
            value={this.state.username}
          >用户名</InputItem>
        <InputItem
            type="phone"
            placeholder="请输入手机号码"
            onChange={this.onChange}
            value={this.state.value}
          >手机号码</InputItem>
        <DatePicker
          mode="date"
          title="Select Date" 
          extra="Optional"
          value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal">请选择日期</List.Item>
        </DatePicker>
        <WingBlank>
          <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </WingBlank>
      </List>
    );
  }
}
export default App;