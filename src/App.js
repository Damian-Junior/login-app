import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './Component/Welcome';
import  Context  from "./Component/Context";
import { useState } from 'react';
import newForm from './Component/NewForm';
import uuid from 'react-uuid';

function App() {

const [regUser, setRegUser] = useState([]);
const [name, setName] = useState('');
const providerValue = {
  name,
  setName,
  regUser,
  setRegUser,
} 
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Context.Provider value = {providerValue}>
           <Router>
             <Switch>             
                <Route path = "/" component = {newForm} exact />
                <Route path = "/login" component = {Form} />
                <Route path = "/newAccount" component = {newForm} exact />
                <Route path = "/welcomePage" component = {Welcome} />
             </Switch>
           </Router>
         </Context.Provider>
             
    </div>
  );
}

export default App;
