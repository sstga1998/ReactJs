import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './FourColGrid.css';

class FourColGrid extends React.Component {
    render(){
        return(
            <div className="fourColGrid">
                <Tabs className="Tabs">
                    <TabList className="TabList">
                    <Tab className="Tab">Phim đang chiếu</Tab>
                    <Tab className="Tab">Phim sắp chiếu</Tab>
                    </TabList>

                    <TabPanel className="TabPanel">
                        <div className="rmdb-grid-content">
                            <img className="clickable" src="./images/avengers.jpg" alt="moviethumb" />
                            <img className="clickable" src="./images/avengers.jpg" alt="moviethumb" />
                            <img className="clickable" src="./images/avengers.jpg" alt="moviethumb" />
                            
                        </div>
                        <div className="rmdb-grid-content">
                            <img className="clickable" src="./images/avengers.jpg" alt="moviethumb" />
                            <img className="clickable" src="./images/avengers.jpg" alt="moviethumb" />
                            <img className="clickable" src="./images/avengers.jpg" alt="moviethumb" />
                            
                        </div>
                  
                    {/* <div className="View">
                        <img src="./images/1.jpg" alt="moviethumb"/>
                    </div> */}
                    </TabPanel>
                    <TabPanel  className="TabPanel">
                        <div className="rmdb-grid-content">
                            <img className="clickable" src="./images/avengers.jpg" alt="moviethumb" />
                            <img className="clickable" src="./images/avengers.jpg" alt="moviethumb" />
                            <img className="clickable" src="./images/avengers.jpg" alt="moviethumb" />
                            
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}
export default FourColGrid;