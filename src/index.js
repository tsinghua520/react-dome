import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
// import { BrowserRouter, Route } from 'react-router-dom'
import App from './App/router'
// import registerServiceWorker from '../config/registerServiceWorker';

// const PrimaryLayout = () => (
//   <div>
//     <Route path="/" exact component={HomePage} />
//     <Route path="/users" component={UsersPage} />
//   </div>
// )

// const HomePage =() => <div>Home Page</div>
// const UsersPage = () => <div>Users Page</div>

// const App = () => (
//   <BrowserRouter>
//     <PrimaryLayout />
//   </BrowserRouter>
// )

ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker();
// react-router