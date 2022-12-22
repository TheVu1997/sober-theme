import React from 'react'
import HeaderBot from './HeaderBot/HeaderBot';
import HeaderTop from './HeaderTop/HeaderTop';

function Header() {
    return (
        <div id='header'>
            <HeaderTop/>
            <HeaderBot/>
        </div>
    )
}

export default Header