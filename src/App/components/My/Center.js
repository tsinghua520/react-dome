import React from 'react';
import '../../../static/font/iconfont.css';
import '../../../static/css/center.css'
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span className="iconfont icon-photo photo"></span>
          <span>myusername</span>
        </div>
        <ul>
          <li>
            <i className="iconfont icon-order"></i>
            <p>我的预订</p>
          </li>
          <li>
            <i className="iconfont icon-order"></i>
            <p>我的预订</p>
          </li>
          <li>
            <i className="iconfont icon-order"></i>
            <p>我的预订</p>
          </li>
          <li>
            <i className="iconfont icon-order"></i>
            <p>我的预订</p>
          </li>
        </ul>
      </div>
    )
  }
}
export default App
