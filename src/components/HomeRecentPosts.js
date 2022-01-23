import React from 'react';
import styled from 'styled-components'
function HomeRecentPosts() {
  return (
        <RecentArticle>
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
    </RecentArticle>
  );
}

export default HomeRecentPosts;
const RecentArticle = styled.article`
h3{
    margin-top: 0;
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
     

 }






`
