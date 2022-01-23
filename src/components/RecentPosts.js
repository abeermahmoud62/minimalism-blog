import React from 'react';
import styled from 'styled-components'
import SideSection from './SideSection';
function RecentPosts() {
  return (
      <Recent>
          <article>
            <div className='recent-post'>
                <div className='left-side-recent'>
                    <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="main-img"/>
                    <p className="date">July 23, 2019 | 3 comments</p>
                </div>
                <div className="right-side-recent article-body">
                        <h3 className='main-title'>Finding simplicity in life</h3>
                        <p className='main-body'><strong>Life can get complicated really quickly</strong>, but it doesn't have to be!
                        There are many ways to simplify your life, <a href="#">a few of which we've explored in the past</a>.
                        This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living.
                        </p> 
                        <a href='/Post.js' className="read-more">continue reading</a>
                    </div>
            </div>
            <div className="recent-post">
                <div className="left-side-recent">
                    <img alt='food' src={process.env.PUBLIC_URL + '/imgs/food.jpg'} />
                    <p className="date">July 19, 2019 | 3 comments</p>
                </div>
                <div className="right-side-recent article-body">
                    <h3 className='main-title'>Keeping cooking simple </h3>
                    <p className='main-body'>
                        Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple. 
                    </p>
                    <a href='/Post.js' className="read-more">continue reading</a>
                </div>
            </div>
        
            <div className="recent-post">
            <div className="left-side-recent">
                    <img alt='work' src={process.env.PUBLIC_URL + '/imgs/work.jpg'} />
                    <p className="date">July 12, 2019 | 3 comments</p>
                </div>
                <div className="right-side-recent article-body">
                    <h3 className='main-title'>Simplicity and work</h3>
                    <p className='main-body'> Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out. </p>
                    <a href='/Post.js' className="read-more">continue reading</a>
                </div>
            </div>
            <div className="recent-post">
                <div className="left-side-recent">
                    <img alt='deco' src={process.env.PUBLIC_URL + '/imgs/deco.jpg'} />
                    <p className="date">July 3, 2019 | 3 comments</p>
                </div>
                <div className="right-side-recent article-body">
                    <h3 className='main-title'>Simple decorations</h3>
                    <p className='main-body'>A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before.</p>
                    <a href='/Post.js' className="read-more">continue reading</a>
                </div>
            </div>
          </article>
          <SideSection />
      </Recent>
  );
}

export default RecentPosts;
const Recent = styled.article`
display: flex;
flex-direction:column ;
justify-content: space-between;
max-width: 1100px;
width:90%;
margin: 0 auto;
h3{
    margin-top: 0;
}
img{
    display: block;
    width: 100%;
}
.recent-post{
    margin-bottom: 2em;
}
.date{
   font-family: 'Noto Sans', sans-serif;
   font-size: 0.9rem;
   color: #707070;   
 } 
 .main-title{
    font-family: 'Lora' ,  sans-serif ;
    font-size: 1.625rem;
    color: #143774;
 }
 .main-body{
    font-size: 1.2rem;
    color: #8d8d8d;
    margin-bottom: 1em;
 }
 a{
   color: #1792d2;
 }
 .article-body{
    line-height: 1.3;
 }
 .read-more{
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem ;
  letter-spacing: 1px;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
 }
 @media (min-width:675px){
     flex-direction: row;
     .recent-post{
         display: flex;
         justify-content: space-between;
     }
     .left-side-recent{
         max-width: 30%;
     }
     .right-side-recent{
         max-width: 65%;
     }
     img{
         width: 100%;
         min-height: 240px;
         object-fit: cover;
     }
     article{
         max-width: 60%;
     }
     
     

 }





`