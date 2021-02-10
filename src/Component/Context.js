import { createContext } from "react";

const Context = createContext({
    user: [],
    userName:'', 
    setUserName: ()=>{},
    password: '',
    setPassword: ()=>{},
    
});
export default Context; 