import React from "react";
import "../style/sidebar.css";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineContacts,
} from "react-icons/ai";
import {
  MdOutlineRestaurantMenu,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";
import { Link } from "react-router-dom";

export default function SideBar({ sidebar, closeSidebar }) {
  const [{ user, cartShow }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
      //  setSidebar(false);
    });
    closeSidebar();
  };
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li>
        <AiOutlineHome />
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <MdOutlineRestaurantMenu />
        Menu
      </li>
      <li>
        <FcAbout /> About Us
      </li>
      <li>
        <MdOutlineMiscellaneousServices />
        Service
      </li>
      <li>
        <AiOutlineContacts />
        <Link to={"/contact"}>Contact Us</Link>
      </li>
      <li onClick={showCart}>
        <AiOutlineShoppingCart />
        My Curt
      </li>
    </div>
  );
}
