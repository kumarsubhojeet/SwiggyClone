import React, { useState } from "react";
import "../CSS/Nav.css";
import { Layout } from "antd";
import {AlignRightOutlined ,
  SearchOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
  CloseCircleOutlined
} from '@ant-design/icons'


import { Drawer, Button } from "antd";
import logo from "../images/logo.svg";
import {Link} from "react-router-dom"



export default function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Layout className="layout">
      <div className="NavBar">
      <div className="header">
        <div className="logo">
        <Link to="/"><img src={logo} className="Nav_logo" alt="Error" /></Link>
          <p style={{paddingTop:'5px'}}><strong style={{borderBottom:"1px solid #000" , paddingRight:'8px'}}>See Location</strong> Click to Choose Location<span style={{paddingLeft:"7px"}}><DownOutlined /></span></p>
        </div>
        <div className="mobileHidden">
          
            <section className='NavLinks_PC'>
            <Link to="/" className="NavLink"><span style={{paddingRight:'6px'}}><SearchOutlined /></span> Search</Link>
             <Link className="NavLink" to="/"><span style={{paddingRight:'6px'}}><QuestionCircleOutlined /></span> Help</Link>
             <Link className="NavLink" to="/"><span style={{paddingRight:'6px'}}><UserOutlined />Sign In</span></Link>
             <Link className="NavLink" to="/"><span style={{paddingRight:'6px'}}><ShoppingCartOutlined /></span> Cart</Link>
            </section>
         
        </div>
        <div className="mobileVisible">
          <Button type="text" onClick={showDrawer}>
          <AlignRightOutlined className="nav_burger" />
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
           <div className="closing_btn" onClick={onClose}>
           <CloseCircleOutlined style={{color:'red'}} /> CLOSE MENU
           </div>
           <section className='NavLinks_Mobile'>
             
           <Link to="/" className="NavLink_NavLinks_Mobile"><span style={{paddingRight:'6px'}}><SearchOutlined /></span> Search</Link>
             <Link className="NavLink_NavLinks_Mobile" to="/"><span style={{paddingRight:'6px'}}><QuestionCircleOutlined /></span> Help</Link>
             <Link className="NavLink_NavLinks_Mobile" to="/"> <strong className="cart_no">1</strong> <span style={{paddingRight:'6px'}}><ShoppingCartOutlined /></span> Cart</Link>
             <Link className="NavLink_NavLinks_Mobile" to="/"><span style={{paddingRight:'6px'}}><UserOutlined />User</span></Link>
            </section>
            
          </Drawer>
        </div>
      </div>
    </div>
      </Layout>
    </div>
  );
}
