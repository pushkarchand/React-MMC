import React,{useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Notify from './services/notify';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Login from './modules/rootmodule/login/login';
import ProductSpanshot from './modules/rootmodule/productSpanshot/productSnapshot';
import { useSelector } from 'react-redux';
import Sidebar from './modules/rootmodule/sidebar/sidebar';
import Header from './modules/rootmodule/header/header';
import ProductOverView from './modules/rootmodule/productoverview/productOverView';
import forgotPassword from './modules/rootmodule/forgotpassword/forgotPassword';
import ProductDetails from './modules/rootmodule/productDetails/productDetails';
import './App.scss';

function App() {
  const is_authenticated = useSelector(state => state.user.is_authenticated);
  const isSidebarOpen = useSelector(state => state.user.isSidebarOpen);
  useEffect(() => {
    Notify.notifications.subscribe((alert) => alert instanceof Function && alert());
  }, [])

  useEffect(() => {
    console.log(is_authenticated)
  }, [is_authenticated])
  return (
    <div className="App">
      {is_authenticated?(
        <Router>
          <div className="App" >
            {
              isSidebarOpen?( <div className="sidebar">
                  <Sidebar/>
              </div>):("")
            }
              <div className="aside">
                  <Header/>
                  <Switch>
                        <Route exact path='/' component={ProductSpanshot}></Route>
                        <Route exact path='/snapshot' component={ProductSpanshot}></Route>
                        <Route exact path='/productoverview' component={ProductOverView}></Route>
                        <Route exact path='/productdetails' component={ProductDetails}></Route>
                        <Route exact path='/productdetails/:id' component={ProductDetails}></Route>
                        <Redirect to="/" />
                  </Switch>
              </div>
          </div>
       </Router>
      ):(
        <Router>
          <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route exact path='/forgotpassword' component={forgotPassword}></Route>
                <Redirect to="/" />
          </Switch>
         </Router>
      )}
       
       <ToastContainer autoClose={5000} />
     </div>
  );
}

export default App;
