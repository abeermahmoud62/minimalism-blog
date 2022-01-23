
import React from "react";


import styled from 'styled-components';
function SideRecent() {
    return (
        <SideEl>
             
        </SideEl>
    );
  }
  
  export default SideRecent;


  const SideEl = styled.div`
.side-section{
border:20px solid #efefef;
padding: 2em;
margin-bottom: 2em;
}
p{
    color: #143774;
    font-size: 1.2rem;
}

h3{
    font-weight: 700;
    font-size: 1.3rem;
    color:#143774 ;
    text-transform: uppercase;
    letter-spacing: .8px;
}
@media (min-width:675px){
    .side-section{
        margin-left: 2em;
        min-width: 200px;
    }
}




`