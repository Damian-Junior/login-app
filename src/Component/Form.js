import React, { useState, useContext } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import Context from './Context';
const Form = ({history})=> {
    
   const {regUser, setRegUser, setName} = useContext(Context);
  
   const login = (e)=> {
      e.preventDefault();
      let user = document.forms.form2.elements.user2.value;
      let pass = document.forms.form2.elements.password2.value;   
      const loggedUser = {user, pass};
      (regUser.some(reg =>(reg.pass === loggedUser.pass && reg.user === loggedUser.user))) ?  
          history.push("/welcomePage"): alert('Incorrect username or password');
        console.log(regUser);   
   } 
    return (

        <form className = 'form' name = "form2">
            <label htmlFor="userName">Username</label>
            <input type="text" id = 'userName' required name ="user2" onChange = {(e)=>{setName(e.target.value)}}/> 
            <label htmlFor="pass">Password</label>
            <input type="password" name="pass" id="pass" required name = "password2"/>
            <input type = 'button' value ='Login' onClick = {login}/>
             <p>Dont have an account ? <Link to ="/newAccount" style ={{textDecoration:'none'}}>Create one</Link></p>
        </form>
    )
}
export default Form;