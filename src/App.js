import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from '../src/pages/Home/index';
import Course from '../src/pages/Courses/index';
import SignUp from '../src/pages/SignUp/index';
import SignIn from "../src/pages/SignIn/index"
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import {HeaderUser} from './Template/HeaderUser'
import Profile from './pages/Profile';
import CoursesDanhMuc from './pages/CoursesDanhMuc/index' ;
import Blog from '../src/pages/Blog/index';
import Checkout from '../src/pages/Checkout/index';
import AdminPage from '../src/pages/AdminPage/index';
import Events from '../src/pages/Events/index';
import About from '../src/pages/About/index';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
                <HeaderUser path="/home" Component={Home}    />
                <HeaderUser path="/course/:idCourse" Component={Course}   />
                <Route path="/signin" component={SignIn} />
                <HeaderUser path="/signup" Component={SignUp} />
                <HeaderUser path="/profile" Component={Profile} />
                <HeaderUser path="/blog" Component={Blog} />
                <HeaderUser path="/courseCategoriate/:idCate" Component={CoursesDanhMuc} />
                <HeaderUser  path="/checkout" Component={Checkout} />
                <HeaderUser  path="/events" Component={Events} />
                <HeaderUser path='/about' Component={About} />
                <Route path="/admin" component={AdminPage}  />
                <HeaderUser path="/" Component={Home}    />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
