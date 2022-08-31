import React from 'react';
import Bookmark3 from "./images/illustration-features-tab-3.svg";
import styled from "styled-components"

function TabComponentThree() {
    return (
        <TabContentThree>
            <h2>Share your bookmarks</h2>
            <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. </p>
            <button>More Info</button>
            <img className="sharebookmark" src={Bookmark3} alt="sharebookmark"/>
        </TabContentThree>
    )
}

export default TabComponentThree;

const TabContentThree = styled.div`

.sharebookmark {
       margin: -285px 200px 20px 30px;
   }
   
   h2 {
       margin: 8rem 0 1.3rem 26rem;
   }

   p {
       margin: 0 0 0.5rem 30.231rem;
       padding: 0 15rem;
   }

   button {
    right: 0;
    margin: 3rem 0rem 0rem 45.3rem;
    padding: 0.86rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 0.9rem;
    border: none;
    background: var(--main-blue);
    color: var(--main-white);
    cursor: pointer;
    position: relative;
}
`;