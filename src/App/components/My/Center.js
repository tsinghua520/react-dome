import React from 'react';
import '../../../static/font/iconfont.css';
import '../../../static/css/center.css'
class App extends React.Component {
  render() {
    return (
      <div className="mycenter">
        <div>
          <span className="iconfont icon-photo photo"></span>
          <span>myusername</span>
        </div>
        <ul>
          <li>
            <a>
              <i className="iconfont icon-book"></i>
              <p>我的预订</p>
            </a>
          </li>
          <li>
            <a>
              <i className="iconfont icon-order"></i>
              <p>订单列表</p>
            </a>
          </li>
          <li>
            <a>
              <i className="iconfont icon-bill"></i>
              <p>我的账单</p>
            </a>
          </li>
          <li>
            <a>
              <i className="iconfont icon-cardbag"></i>
              <p>我的卡包</p>
            </a>
          </li>
          <li>
            <a>
              <i className="iconfont icon-invoice"></i>
              <p>我的发票</p>
            </a>
          </li>
          <li>
            <a>
              <i className="iconfont icon-activity"></i>
              <p>我的活动</p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
export default App
