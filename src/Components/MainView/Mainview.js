import React from 'react';
import Extension from './Extension/Extension';
import Faq from './Faq/Faq';
import Features from './Features/Features';
import Top from './Top/Top';

const Mainview = () => {
    return (
        <div>
            <Top/>
            <Features/>
            <Extension/>
            <Faq/>
        </div>
    )
}

export default Mainview;
