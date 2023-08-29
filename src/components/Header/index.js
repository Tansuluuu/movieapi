import React from 'react';
import {Link} from "react-router-dom";
import './style.css'

const Header = ({fullPage}) => {
    return (
        <header className={`header ${fullPage ? 'custom-header' : ''}`}>
            <h4>  TA TA NA </h4>
            <nav className={'nav'}>
                <Link className={'nav-link'} to='/'>Home</Link>
                <Link className={'nav-link'} to='/popular'>Popular</Link>
                <Link className={'nav-link'} to='/about'>About</Link>
            </nav>
            <div className={'search-wrapper'}>
                <input type='text' placeholder={'Start type'}/>
                <button>Search</button>
            </div>
        </header>
    );
};

export default Header;