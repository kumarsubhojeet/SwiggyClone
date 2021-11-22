import React from 'react'
import '../CSS/Jumbo.css'
import {StarFilled , SettingOutlined} from '@ant-design/icons';

export default function Jumbotron() {
    return (
        <div>
            <div className="Jumbo_main">

                <div className="Jumbo_left">
                    <img src="https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" className="Jombo_img" alt="Error" />
                </div>

                <div className="Jumbo_center">

                    <div className="center_heading">
                    <h1 style={{fontSize:"32px"}}>Francesco's Pizzeria</h1>
                    <h5>Pizzas, Italian</h5>
                    <h5>Marol Sakinaka, Marol Sakinaka</h5>

                    </div>
                    
                    <div className="Jumbo_center_details">
                        <div className="ratings">
                            <ul className="Jumbo_center_details_rating" style={{listStyleType:'none'}}>
                                <li style={{fontWeight:'bold'}}><StarFilled /> <span style={{paddingLeft:'6px'}}>5.0</span></li>
                                <li>20+ Ratings</li>
                                
                            </ul>
                        </div>
                        
                        <div className="timing">
                            <ul style={{listStyleType:'none'}} className="Jumbo_center_details_time">
                                <li style={{fontWeight:'bold'}}>--mins</li>
                                <li>Delivery Time</li>
                            </ul>
                        </div>
                        <div className="cost">
                            <ul style={{listStyleType:'none'}} className="Jumbo_center_details_ul">
                                <li style={{fontWeight:'bold'}}><i class="fas fa-rupee-sign"></i> <span style={{paddingLeft:'6px'}}>1000</span></li>
                                <li>Cost for two</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="Jumbo_right">
                    <div className="offers" >
                        <ul style={{listStyleType:'none'}} >
                            <li><SettingOutlined /><span style={{paddingLeft:'6px'}}>10% off | Use code PARTY</span></li>
                            <li><SettingOutlined /><span style={{paddingLeft:'6px'}}>50% off up to ₹100 | Use code TRYNEW</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
