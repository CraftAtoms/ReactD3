import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from "styled-components";
import logo from '../../images/Logo.png'
import './Header.css'


const Wrapper = styled.div`
display: grid;
margin: 0 auto;

grid-template-columns: 1fr 1fr;
max-width: 1100px;


img {
  background:rgba(255,255,255, 0.7);
  border-radius: 20px;
  padding: 10px;
  margin: 5rem 0 0;
}
`



class Header extends Component {
  
  render() {
    return (
    <Wrapper> 
      <Link to='/'><img src={logo} height='35' alt=''/></Link>
    </Wrapper>
    )
  }
}

export default Header
