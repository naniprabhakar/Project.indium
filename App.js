import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Class from './Class';
import Effect from './Effect';
import Custom from './Custom'
import From from './From';
//import Map from './Map';


function CountApp() {
    // Declare a new state variable, which we'll call "count"  
    const [count, setCount] = useState(0);

    return (
        <div>
            <div><h1>Hooks</h1></div>
            <div>
                <p>You clicked {count} times</p> <br/>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>

            <div>
                <Class />
                <Effect />
                <Custom />
                <From />
             </div>
        </div>
        //<Map />
    );
}
export default CountApp; 
