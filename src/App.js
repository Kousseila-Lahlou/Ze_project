import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
            <Redirect to="/home"/>
      </Route>
        <Route path={'/home'} component={Home}/>
        <Route path={'/login'} component={Login}/>
        <Route path={'/register'} component={Register}/>
      </Switch>
    
    </BrowserRouter>
);
}

export default App;
