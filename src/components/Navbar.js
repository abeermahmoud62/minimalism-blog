import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
function Navbar() {    
  return (
        <NavbarEl>
            <div className="container">
                <div className="titles">
                    <h1>Living the simple life</h1>
                    <p className="subtitle">A blog exploring the minimalism in life</p>
                </div>
                <nav>
                    <ul class="nav-list">
                        <li className='list-el'><NavLink to="/" exact className='nav-link' activeClassName="underline" >HOME</NavLink></li>
                        <li className='list-el'><NavLink to="/about" className='nav-link' activeClassName="underline" >ABOUT ME</NavLink></li>
                        <li className='list-el'><NavLink to="/recent" className='nav-link' activeClassName="underline" >RECENT POSTS</NavLink></li>
                    </ul>
                </nav>
            </div>
        </NavbarEl>
  )
}

export default Navbar;
const NavbarEl = styled.header`
background: #f8f8f8;
padding: 2em 0;
text-align: center;
margin-bottom: 3em;
.nav-link{
    color: #707070;
    text-decoration: none;
    margin: .3em 0;
    &:hover{
        border-bottom: 1px solid #707070;
    }
}
h1{
    font-family: 'Lora' ,  sans-serif;
    font-weight: 400;
    font-size: 2.2rem;
    letter-spacing: 0.3px;
    color: #143774;
    margin: 0;
 }
 .titles{
    line-height: 1.4;
 }
.subtitle{
     font-size: .75rem;
     font-weight: 700;
     letter-spacing: 2.4px;
     text-transform: uppercase;
     color: #1792d2;
     margin: 0;
}
.nav-list{
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     list-style: none;
     font: 1rem bold ;
     padding: 0;
}
.list-el p{
    color: #707070;
    text-decoration: none;
    margin: .3em 0;
}
.active{
    border-bottom: 1px #707070 solid; 
}
@media (min-width: 951px) {
  .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      max-width: 1100px;
      width: 90%;
      margin: 0 auto;
  }
  text-align: left;
  .nav-list{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
   .list-el{
       margin-left: 2em;
   }  
}



`