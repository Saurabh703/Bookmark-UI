import React from 'react';
import Bookamrk2 from "../TabComponent/images/illustration-features-tab-2.svg";
import styled from "styled-components"

function TabComponentTwo() {
    return (
        <TabContentTwo>
            <h2>Intelligent Search</h2>
            <p>Our powerful search feature will help you find saved sites in no time at all. No need to travel through all of your bookmarks.</p>
            <button>More Info</button>
            <img className="intelligent" src={Bookamrk2} alt="Intelligent Search" />
        </TabContentTwo>
    )
}

export default TabComponentTwo;

const TabContentTwo = styled.div`
.intelligent {
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