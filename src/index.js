import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
import About from './ex/ex1';
import Inbox from './ex/ex2';
import { Router, Route, Link } from 'react-router'
import registerServiceWorker from './registerServiceWorker';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {/*
          接着用 `this.props.children` 替换 `<Child>`
          router 会帮我们找到这个 children
        */}
        {this.props.children}
      </div>
    )
  }
})
React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.body)
registerServiceWorker();
// 组合（composition） vs 继承（Inheritance）