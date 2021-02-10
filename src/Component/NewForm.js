import React, { useContext, useState } from 'react';
import './index.css';
import {Link, useHistory} from 'react-router-dom'
import Context from './Context';

const NewForm = (props)=> {
    const {history} = props;
    const {regUser, setRegUser} = useContext(Context);
    const [isComplete, setIsComplete] = useState(false);
const handleSubmit = (e)=>{
     e.preventDefault();
     let user = document.forms.form.elements.userName.value;
     let pass = document.forms.form.elements.password.value;
     let confirmPass = document.forms.form.elements.confirmPassword.value;
     if (user === '' || pass === '') {
        alert('please complete your form');}
     else if(pass !== confirmPass){
         alert("password not confirm. Make sure you pass in the same password");
     }
        else {
        const newUser = [...regUser, {user, pass}];
        setRegUser(newUser);
        alert('Account created succesfully');
        history.push("/login");
     }   
     
}

    return (
        
        <form className = 'form' name = 'form'>
            <label htmlFor="userName">Username</label>
            <input type="text" id = 'userName' name = "userName" />
            <label htmlFor="pass" >Password</label>
            <input type="password" name="password" id="pass" required />
            <label htmlFor="pass">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirm_pass" required />
            <input type ="button"  onClick = {handleSubmit} value= ' Create'/>       

        </form>
    )
}
export default NewForm;