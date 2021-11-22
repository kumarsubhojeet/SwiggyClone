import React from 'react'
import '../CSS/JumboLow.css'
import {SearchOutlined , HeartOutlined} from '@ant-design/icons';
import { Checkbox } from 'antd';

export default function JumboLow() {
    return (
        <div>
            <div className="JumboLow_main">
                <div className="search">
                    <div className="search-items">
                    <SearchOutlined style={{paddingRight: '10px' , fontSize:'27px'}} />
                    <input type="text" className="search-input" placeholder="Search for dishes..."  />
                    </div>
                </div>

                <div className="only_veg">
                <div className="only_veg_items">
                <Checkbox style={{paddingRight: '10px'}} />
                <h3 className="only_veg_h3">Veg Only</h3>
                </div>
                </div>

                <div className="favorite">
                    <div className="favorite_items">
                    <HeartOutlined style={{paddingRight: '10px' , fontSize:'27px' , marginTop: '-5px'}} />
                        <h3 className='favorite_items_h3'>Favorite</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
