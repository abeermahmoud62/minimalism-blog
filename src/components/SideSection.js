import React from 'react';
import styled from 'styled-components';
function SideSection() {
  return (
      <SideEl>
            <div className="side-section">
                <h3>About Me</h3>
                <img alt="about" src={process.env.PUBLIC_URL + '/imgs/about-me.jpg'} />
                <p>I find life better, and I'm happier, when things are nice and simple.</p>
            </div>
            <div className="side-section">
                      <h3>recent posts</h3>
                      <div className="recent-post-side">
                          <img alt='food' src={process.env.PUBLIC_URL + '/imgs/food.jpg'} />
                          <p>Keeping cooking simple</p>
                      </div>
                      <div className="recent-post-side">
                          <img alt='work' src={process.env.PUBLIC_URL + '/imgs/work.jpg'} />
                          <p>Simplicity and work</p>
                      </div>
                      <div className="recent-post-side">
                          <img alt='deco' src={process.env.PUBLIC_URL + '/imgs/deco.jpg'} />
                          <p>Simple decorations</p>
                      </div>
              </div>
        </SideEl>
  );
}

export default SideSection;



const SideEl = styled.aside`

.side-section{
border:20px solid #efefef;
padding: 2em;
margin-bottom: 2em;
}
p{
    color: #143774;
    font-size: 1.2rem;
    line-height: 1.4;
}

h3{
    font-weight: 700;
    font-size: 1.3rem;
    color:#143774 ;
    text-transform: uppercase;
    letter-spacing: .8px;
}
.recent-post-side p{
    font-family: 'Lora' , sans-serif;
    color: #143774;
}

.recent-post-side{
    border-bottom: 1px solid #707070;
    margin-bottom: 2em;
    &:last-child{
        border: none;
        margin:0;
    }
}
.recent-post-side{
    border-bottom: 1px solid #707070;
}
@media (min-width:675px){
        max-width: 30%;
        margin-left: 2em;
        min-width: 200px;
}
@media (max-width:674px){
    max-width: 90%;
    min-width: 500px ;
    img{
        width: 100%;
    }
}
    



`