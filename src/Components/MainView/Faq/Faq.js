import React, { useState } from 'react';
import IconArrow from "./Images/icon-arrow.svg";
import './Faq.css'

const Faq = () => {
    // const [onSet, setOnSet] = useState(false);
    const [faq, setFaq] = useState([
      {
        question:'What is BookMark?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        open: true
      },
      {
        question:'How can I request a new browser?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        open: false
      },
      {
        question:'Is there a mobile app? Is there a mobile app?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        open: false
      },
      {
        question:'What about other Chromium browsers?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        open: false
      }
    ])
    
    // const Toggle = (slider, open) -*-=> {
    //     setOnSet({ ...onSet, [slider] : open })
    // };                                                                                 
    // const select = (e) => {
    //     e.preventDefault();        setOnSet(!onSet)
    // }
    const toggleFaq = index => {
      setFaq(faq.map((faqs, i) => {
        if(i === index){
           faqs.open = !faqs.open
        } else {
        faqs.open = false
        }
        return faqs
      }))
    }
    
    return (
        <div className="faq_list">
            <h1>Frequently Asked Questions</h1>
            <p>Here are some of our FAQ's. If you have any other questions you'd like answered please feel free to email us.</p>
            <div className="faqs">
              { faq.map((faqs, i) =>(
           <div 
        className={"faq " + (faqs.open ? 'open' : '')}
        key={i}
        onClick={() => toggleFaq(i)}
        >
            <div className="faq-question">
                 {faqs.question}
            </div>
          <div className="faq-answer">
                 {faqs.answer}
           </div>
        </div>))}
        </div>
            <button>More Info</button>
            <div className="main_contact">
                <p className="text-uppercase">35,000+ ALREADY JOINER</p>
                <h1 className="bold">Stay up-to-date with what we're doing</h1>
                <button>Contact Us</button>
            </div>
        </div>
    );
};

export default Faq;
