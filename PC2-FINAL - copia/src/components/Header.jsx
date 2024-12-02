import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className='HeaderSection'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='headerIcon'>
                <rect x="9" y="9" width="6" height="6" rx="1" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
                <rect x="5" y="5" width="14" height="14" rx="2" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
                <line x1="9" y1="2" x2="9" y2="5" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="2" y1="15" x2="5" y2="15" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="9" y1="19" x2="9" y2="22" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="19" y1="15" x2="22" y2="15" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="15" y1="2" x2="15" y2="5" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="2" y1="9" x2="5" y2="9" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="15" y1="19" x2="15" y2="22" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="19" y1="9" x2="22" y2="9" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
            </svg>
            <h1 className='titleHeader'>MIPS Visual Simulator</h1>
        </header>
    );
};

export default Header;