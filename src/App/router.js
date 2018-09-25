import React from 'react';
import Index from './components/Index/Index';
import Users from './components/Users';
import { BrowserRouter, Route } from 'react-router-dom'
// import registerServiceWorker from '../config/registerServiceWorker';

const PrimaryLayout = () => (
  <div>
    <Route path="/" exact component={Index} />
    <Route path="/users" component={Users} />
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