import React from 'react';
import Index from './components/Index/Index';
import Users from './components/Users';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Apartment from './components/Apartment/ApartmentDetail';
import Reservation from './components/Reservation/Reservation';
import Center from './components/My/Center';
import { BrowserRouter, Route } from 'react-router-dom'
// import registerServiceWorker from '../config/registerServiceWorker';
const PrimaryLayout = () => (
  <div>
    <Route path="/" exact component={Index} />
    <Route path="/users" component={Users} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/center" component={Center} />
    <Route path="/apartment" component={Apartment} />
    <Route path="/reservation" component={Reservation} />
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