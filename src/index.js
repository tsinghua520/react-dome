import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './ex/ex1';
import Inbox from './ex/ex2';
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const PrimaryLayout = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/users" component={UsersPage} />
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker();
// react-router