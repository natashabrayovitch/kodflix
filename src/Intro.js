import React from 'react';
 import { Link } from 'react-router-dom';

export default function Intro(props) {
    return (
      <Link to='/details' className='item'>
        <img src={props.logo} alt={`${props.name} logo`} />
        <div className='overlay'>
          <h3>{props.name}</h3>
        </div>
      </Link>
    );
  }