import React, { Component } from 'react';
import '../Features/Features.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabComponentOne from './TabComponent/TabComponentOne';
import TabComponentTwo from './TabComponent/TabComponentTwo';
import TabComponentThree from './TabComponent/TabComponentThree';

class Features extends Component{
    state  = {
        tabIndex: 0
    }
    
    render() {
    return (
        <div className="features_content">
            <h2>Features</h2>
            <h4>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</h4>
            <div className="features_main">
            <Tabs
            className="tabs"
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
            >
                <TabList className="tab-nav-container">
                    <Tab
                       className={`${this.state.tabIndex ===0 ? 'tab-selected active' : null}`}
                    >
                       <h3>Simple Booking</h3>
                    </Tab>
                    <Tab
                    className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}
                    >
                        <h3>Speedy Searching</h3>
                    </Tab>
                    <Tab
                    className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}
                    >
                        <h3>Easy Sharing</h3>
                    </Tab>
                </TabList>
                <TabPanel>
                   <TabComponentOne />
                </TabPanel>
                <TabPanel>
                   <TabComponentTwo />
                </TabPanel>
                <TabPanel>
                   <TabComponentThree />
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};
}
export default Features;
