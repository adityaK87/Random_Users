import React from 'react';
import './css/index.css';


const Header = ({ heading }) => {
    return (
        <h1 className='heading' style={{ textAlign: "center" }}>{heading}</h1>
    )
}

export default Header
