import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
};

// PrivateRoute untuk memastikan pengguna telah login sebelum mengakses halaman tertentu
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('loggedIn') === 'true' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default App;
