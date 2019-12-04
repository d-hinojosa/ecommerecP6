// import React from 'react';
// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
// import routes from './routes';
// import { useRoutes } from 'hookrouter';
// import './App.css';

// This code below helps with logging both(Request/Reponse logs)
// The request id is added to the req object and can be retrieved by calling req.id.
// const addRequestId = require('express-request-id')();
// app.use(addRequestId);

// function App() {
//   const routeResult = useRoutes(routes);
//     return ( 
//       < div className = "App" >
// 				<Navbar /> 
//         { routeResult }
// 				<Footer />
// 			</div>  
//     );
// }

// export default App;
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
// import routes from "../../routes/";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import { useRoutes } from "hookrouter";
import "./App.css";
import httpClient from "./httpClient";
import Home from "./Components/Home/index";
import Products from "./Components/Products/index";
import Contact from "./Components/Contact/index";
import LogIn from "./Views/LogIn";
import LogOut from "./Views/LogOut";
import SignUp from "./Views/SignUp";
import RTH from "./Views/RTH";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() };
  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }
  logOut() {
    httpClient.logOut();
    this.setState({ currentUser: null });
  }
  render() {
    // const routeResult = useRoutes(routes);
    const { currentUser } = this.state;
    return (
      <div>
        <Router>
          <Navbar currentUser={currentUser} />
          <Switch>
            <Route
              path="/login"
              render={props => {
                return (
                  <LogIn
                    {...props}
                    onLoginSuccess={this.onLoginSuccess.bind(this)}
                  />
                );
              }}
            />
            <Route
              path="/logout"
              render={props => {
                return <LogOut onLogOut={this.logOut.bind(this)} />;
              }}
            />
            {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
            <Route
              path="/signup"
              render={props => {
                return (
                  <SignUp
                    {...props}
                    onSignUpSuccess={this.onLoginSuccess.bind(this)}
                  />
                );
              }}
            />
            <Route
              path="/rth"
              render={() => {
                return currentUser ? <RTH /> : <Redirect to="/login" />;
              }}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}
export default App;