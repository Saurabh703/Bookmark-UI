import React from 'react';
import "../Top/Top.css";
import { Button } from "@material-ui/core";
import tablet from "../Top/image/illustration-hero.svg";

const Top = () => {
    return (
        <div className="heading">
             <div className="header_content">
            <h1 className="center">A Simple Bookmark Manager</h1> 
            <h4>A clean and simple interface to organize your favourite websites. Open a new browser and see your sites load instantly. Try it for free.</h4>
            </div>
           <button className="button" >
               Get it on Chrome 
               </button>
           <button className="button" style={{ marginLeft: '1.5rem'}}>
               Get it on Firefox 
               </button>
               <div className="shape">
                     <img className="tablet" src={tablet} alt="tablet" />
                     </div>
        </div>
    );
};

export default Top;
