import React from 'react';
import styled from 'styled-components';
import SideRecent from './SideRecent';
function AboutMe() {
  return(
    <AboutPage>
      <div className='about-content'>
          <img src={process.env.PUBLIC_URL + './imgs/about-me.jpg'} alt="about me"/>
       
          <h3>My name is John and living the simple life saved my life </h3> 
          <p> 
          <strong>I used to be a pack rat. </strong>
          I had so many things that I thought that I loved, 
          but the truth was I couldn't even appreciate any of it because there was too much.
          </p>
          <p> 
          Things were terrible. I had a job that I hated, a home that I didn't want to live in,
          and I couldn't hold a relationship.
          </p>
          <h4>How I turned things around</h4>
          <p>
              <strong>I was on the verge of a breakdown when I got rid of everything. </strong>
              I literally put 90% of my possessions in the garbage, sold my place and moved into a smaller apartment,
              and I quit my job.</p>
              <p>
               It wasn't easy at all, but everything around me was in such a bad place, I didn't know what else to do. 
              And it worked. 
          </p>
          <h4>Now I live the simple life</h4>
          <p>
            Now that I'm living a simple life, things are so much better.
            I'm less stressed, enjoy life and work more, and I have more free time to enjoy.
            </p>
            <p> With how much it turned my life around,
            <strong>I felt like I had no choice but to start sharing how I did it</strong>,
            and how others can benefit from living a simple life as well, which is why I started this site!
          </p>
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
    </AboutPage>
  )
}

export default AboutMe;
const AboutPage = styled.main`
display: flex;
flex-direction: column;
justify-content: space-between;
max-width: 1100px;
width:90%;
margin: 0 auto;
.side-section{
border:20px solid #efefef;
padding: 2em;
margin-bottom: 2em;
}
@media (min-width:675px){
  flex-direction: row;
  .about-content{
    max-width: 65%;
  }
  .side-section{
    max-width: 20%;
  }
}
img{
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}
h3{
    font-family: 'Lora',sans-serif ;
    font-weight: 400;
    font-size: 1.5rem;
    color: #143774;
}
p{
  Color:#707070;
  font-size: 1.2rem;
  line-height: 1.4;
}
h4{
  font-family: 'Lora',sans-serif ;
    font-size: 1.3rem;
    color: #1792D2;
    font-weight: 400;
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



`