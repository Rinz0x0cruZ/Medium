import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  
  return (
    <div className='face'>
      <div className='left-face'>
            <h2 className='b'>Stay curious.</h2>
            <span className='cw'>
                <h3>Discover stories, thinking, and expertise from writers on any topic.</h3>
            </span>
            <button className='btn-dark-h'>Start reading</button>
      </div>
      <div className='right-face'>
        
      </div>
    </div>
  );
};

export default Header;
