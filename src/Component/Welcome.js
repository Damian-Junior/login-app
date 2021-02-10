import React, {useContext} from 'react';
import Context from './Context';

const Welcome = ()=>{
const {name} = useContext(Context);
    return (
        <div>
           <h1 style = {{textTransform: 'capitalize'}}>Welcome {name} To My Mobile App</h1>
        </div>
    )
}
export default Welcome;