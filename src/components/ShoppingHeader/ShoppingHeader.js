import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './ShoppingHeader.css'

class ShoppingHeader extends Component{

  componentDidMount(){
  }
  componentDidUpdate(){
  }

  render(){
    return(
      <div className="header_container">
      <div className="header_fix">
        <div className="in_upper_header_con">
          <div className="in_upper_header">
            <div className="upper_header_left">
              <Link className="upper_header_logo" to="/"></Link>
              <Link className="upper_header_pay" to="/shopping"></Link>
            </div>
            <div className="upper_header_right">
              <div id="gnb">
                <ul>
                  <li className="gnb_lis gnb_my_li">
                    <div className="gnb_namebox">
                      <span className="gnb_my">
                        <img id="gnb_profile_img" src="https://ssl.pstatic.net/static/common/myarea/myInfo.gif" alt="내 프로필 이미지"/>
                        <span className="filter_mask"></span>
                        <span className="gnb_name">{this.props.currentUser.user.username}</span>
                      </span>
                    </div>
                  </li>
                  <li className="gnb_lis gnb_notice_li">
                    <span className="gnb_notice">
                      <span className="gnb_icon"></span>  
                    </span>
                  </li>
                  <li className="gnb_lis"></li>
                  <li className="gnb_lis"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lower_header_con">
          <div className="lower_header">
            <h1 className="header_title">
              <Link to="/shopping"></Link>
            </h1>
            <div className="header_search_area">
              <form name="search">
                <fieldset>
                  <div className="search_con">
                    <input className="search_input"/>
                    <button className="search_icon"/>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="header_shopping_my"></div>
          </div>
        </div>
      </div>
    </div>
    )
  }

}

export default ShoppingHeader;