import React, { Component } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Mainview from '../Components/MainView/Mainview';
// import Form from '../Form';
import "antd/dist/antd.css";

class index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Mainview />
                <Footer /> 
                {/* <Form /> */}
            </div>
        )
    }
}
export default index;
