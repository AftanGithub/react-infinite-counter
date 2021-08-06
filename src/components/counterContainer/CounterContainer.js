import React from 'react';
import './CounterContainer.css';
import Counter from '../counter/Counter';
import logo from './img/test-logo.png';

const  CounterContainer= () => {
    return (  
        <div>
            <div>
            <a className="navbar-brand" rel="noopener noreferrer" target="_blank" href="https://github.com/AftanGithub">
                <img src={logo} alt="logo" className="logo"/>
            </a>
                <h1 className="heading">Infinite Counter</h1>
            </div>
            <div>
                <Counter />
            </div>
        </div>
    );
}
 
export default CounterContainer;