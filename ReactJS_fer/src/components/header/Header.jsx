import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

import { ShopContext } from "../../context/shop-context";
// import { CartItem } from "../../pages/cart/cart-item";
import CustomizedInputBase from "./Search";

class Header extends React.Component {
  static contextType = ShopContext;
  render() {
    const { getTotalCartAmount } = this.context;
    const totalAmount = getTotalCartAmount();
    return (
      <div class="header-all">
        <div class="header">
          <div id="header">
            <a class="logo" href="/">
              <img src="assets/img/logo/logo2.png" class="logo-img" alt="" />
              <p>STUDENT DEAL</p>
            </a>
            <div>
              <ul id="navbar">
                <li>
                  <NavLink to="/about">Về Chúng Tôi</NavLink>
                </li>
                <li>
                  <NavLink to="/login">
                    <button id="button">Đăng nhập</button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="header1">
          <ul id="navbar1">
            <li>
              <NavLink to="/" class="active">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/trend">Xu hướng</NavLink>
            </li>
            <li>
              <NavLink to="/all">Tất cả voucher</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog&News</NavLink>
            </li>
            <li>
              <NavLink to="/promo">Quảng cáo</NavLink>
            </li>
            <li class="bar">
              <NavLink to="/cart">
                <i class="fa fa-regular fa-tag"></i> Voucher của tôi
              </NavLink>
            </li>
            <li class="bar">
              <NavLink to="/inforUser/accountsettings">
                <i class="fa fa-regular fa-user"> </i> Thông tin của tôi
              </NavLink>
            </li>
            <li class="bar">
              <NavLink to="/notification">
                <i class="fa fa-regular fa-bell"></i> Thông báo
              </NavLink>
            </li>
          </ul>

          <div class="navbar-search-container">
            {/* <form class="navbar-search-container">
              <input id="search-text" type="text" placeholder="Tìm kiếm" />
              <button id="search-btn">
                <img src="assets/img/header/Search.png" />
              </button>
            </form> */}
            <CustomizedInputBase />
          </div>

          <div>
            <ul id="navbar2">
              <li class="lap myVoucher-all">
                <NavLink to="/cart">
                  <i class="myVoucher fa fa-regular fa-tag"></i>

                  <p className="number">{totalAmount}</p>
                </NavLink>
              </li>
              <li id="mobile">
                <NavLink to="/cart">
                  <i class="fa fa-regular fa-tag"></i>({totalAmount})
                </NavLink>
              </li>
              <li class="lap">
                <NavLink to="/inforUser">
                  <i class="fa fa-regular fa-user"></i>
                </NavLink>
              </li>
              <li class="lap">
                <NavLink to="/notification">
                  <i class="fa fa-regular fa-bell"></i>
                </NavLink>
              </li>
            </ul>
          </div>

          <div class="mobile">
            <i class="fas fa-outdent"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
