import React from 'react';
import About from './components/About';
import Inbox from './components/Inbox';
import { BrowserRouter, Route } from 'react-router-dom'
// import registerServiceWorker from '../config/registerServiceWorker';

const PrimaryLayout = () => (
  <div>
    <Route path="/" exact component={About} />
    <Route path="/users" component={Inbox} />
  </div>
)
// const HomePage =() => <div>Home Page</div>
// const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)
export default App