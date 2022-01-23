import React from 'react';
import styled from 'styled-components';
function Footer() {
  return (
      <FooterEl>
            <h3>Living the Simple Life</h3>
            <p>Copyright 2019</p>
      </FooterEl>
  )
}

export default Footer;
const FooterEl = styled.footer`

background: #143774;
text-align: center;
padding: 3em 0;
margin-top: 3em;

h3 ,
p {
    color:rgba(255, 255, 255 , 0.65)
}
h3{
    letter-spacing: 1.5px;
}

`