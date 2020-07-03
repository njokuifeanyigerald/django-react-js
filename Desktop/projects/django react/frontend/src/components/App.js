import React, { Component,Fragment } from "react";
import { render } from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic';
import Header from  './layout/header';
import Alert from './layout/alert';
import Dashboard from './leads/dashboard';
import {Provider} from 'react-redux';
import store from '../store';
import {HashRouter as Router, Route,Switch,Redirect} from 'react-router-dom';
import Login from './accounts/login';
import Register from './accounts/register';
import PrivateRoute from './common/privateRoute';

const alertOptions = {
  timeout: 3000,
  postion: "top center",
}

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
              <Router>
                <Fragment>
                    <Header/>
                    <Alert />
                    <div className="container">
                      <Switch>
                        <PrivateRoute exact path='/' component={Dashboard} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                      </Switch>
                    </div>
                </Fragment>
              </Router>
            </AlertProvider>
        </Provider>
      
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);