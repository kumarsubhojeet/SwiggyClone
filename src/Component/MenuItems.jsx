import React from 'react'
import '../CSS/MenuItems.css'
import veg from '../images/veg.jpg'
import Nonveg from '../images/nonveg.png'
import { Button } from 'antd';

export default function MenuItems({data , onAdd}) {
    return (
        <div>
            <div className="MenuItems_main">
                <div className="menus">

                    <div className="veg_non_veg">
                        {
                            data.veg ? <img src={veg} className="veg-nonveg" alt="Error" />
                            :
                            <img src={Nonveg} className="veg-nonveg" alt="Error" />
                        }
                    </div>


                    <div className="menu_wrapper">
                        <div className="menu_wrapper_left">
                            <h2 style={{fontWeight:'700'}}>{data.name}</h2>
                            <h3><i class="fas fa-rupee-sign rupee"></i>{data.price}</h3>
                        </div>

                        <div className="menu_wrapper_right" onClick={() => onAdd(data)}> 
                        <div >

                        <h4 className="addtocart" style={{color: '#229954' , fontWeight:'500'}}>ADD <span style={{color: '#229954' , fontWeight:'500'}}>+</span></h4>
                        </div>
                        </div>

                    </div>

                    <div className="desc">
                        <h3 style={{color:'  #a6acaf  '}}>{data.desc}</h3>
                    </div>
                </div>
             
            </div>
        </div>
    )
}
