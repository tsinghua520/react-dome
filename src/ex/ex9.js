// 状态提升 类同于vue父子组件 
// 遵循单一数据源原则
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
// import App from './ex/ex1';
// import App from './ex/ex2';
import registerServiceWorker from './registerServiceWorker';

function BoilingVerdict(props){
  if(props.celsius > 100){
    return <h2>The water would boil.</h2>
  }else{
    return <p>The water wound not boil.</p>
  }
}
function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9
}
function toFahrenheit(celsius){
  return (celsius * 9 / 5) + 32
}
function tryConvert(tempearture, convert){
    const input = parseFloat(tempearture)
    if(Number.isNaN(input)) {
      return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded
}
class TemperatureInput extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    console.log(event.target.value);
    this.props.onTemperatureChange(event.target.value)
  }
  render(){
    return (
      <div>
        <h6>this is {this.props.scale}</h6>
        <input type='text' value={this.props.temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={this.props.temperature} />
      </div>
    )
  }
}
class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = {temperature:'', scalc:'c'}
  }
  handleCelsiusChange(temperature){
    this.setState({
      scale: 'c',temperature
    })
  }
  handleFahrenheitChange(temperature){
    this.setState({
      scale: 'f',temperature
    })
  }
  render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature,toFahrenheit) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature,toCelsius) : temperature
    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
      </div>
    )
  }
}
ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)
registerServiceWorker();
// 第一步 建立输出公共组件
// 第二步 传输事件和值
// 第三步 事件处理 数值转换 公众数据传递