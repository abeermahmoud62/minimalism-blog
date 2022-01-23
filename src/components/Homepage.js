import React from 'react';
import styled from 'styled-components';
import HomeRecentPosts from './HomeRecentPosts';
import MainArticle from './MainArticle';
import SideSection from './SideSection';
function Homepage() {
  return (
    <HomepageEl>
        <main>
            <MainArticle />
            <HomeRecentPosts />
        </main>
        <SideSection />
    </HomepageEl>
  )
}

export default Homepage;
const HomepageEl = styled.div`
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      max-width: 1100px;
      width: 90%;
      margin: 0 auto;
img{
    width:100%;
    display: block;
}

 @media (min-width:675px){
    flex-direction: row;
    justify-content: space-between;
    main{
        width: 70%;
    }
}

`