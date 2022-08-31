import React from 'react';
import Bookmark1 from "../TabComponent/images/illustration-features-tab-1.svg";
import styled from "styled-components"

function TabComponentOne() {
    return (
        <TabContentOne>
            <h2>Bookmark in one click</h2>
            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
            <button>More Info</button>
            <img className="bookmark_one" src={Bookmark1} alt="bookmarkone"/>
        </TabContentOne>
    )
}

export default TabComponentOne;

const TabContentOne = styled.div`

   .bookmark_one {
       margin: -285px 20px 20px 30px;
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