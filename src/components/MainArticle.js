import React from 'react';
import styled from 'styled-components';
function MainArticle() {
  return (
    <MainArticleEl>
        <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="main-img"/>
        <p className="date">July 23, 2019 | 3 comments</p>
        <div className="article-body">
            <h3 className='main-title'>Finding simplicity in life</h3>
            <p className='main-body'><strong>Life can get complicated really quickly</strong>, but it doesn't have to be!
              There are many ways to simplify your life, <a href="#">a few of which we've explored in the past</a>.
              This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living.
            </p> 
            <a href='/Post.js' className="read-more">continue reading</a>
        </div>
    </MainArticleEl>
  )
}

export default MainArticle;
const MainArticleEl = styled.article`
margin-bottom: 3em;
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





`