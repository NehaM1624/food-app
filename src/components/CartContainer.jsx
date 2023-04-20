import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiRupee } from "react-icons/bi";
import { MdKeyboardBackspace } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";
import empty from "../img/emptyCart.svg";
import Cart from "./Cart";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CartContainer() {
  const [{ user, cartItems, cartShow }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  const clearCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  
  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(1);

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTotal(totalPrice);
  }, [total, flag]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full h-screen md:w-375  bg-white drop-shadow-md flex flex-col z-[101]"
      style={{ height: "89vh" }}
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div onClick={showCart} whileTap={{ scale: 0.75 }}>
          <MdKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          onClick={clearCart}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
        >
          <AiOutlineClear /> Clear
        </motion.p>
      </div>

      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <Cart key={item.id} item={item} flag={flag} setFlag={setFlag} />
              ))}
          </div>

          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ {total}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">$ 2.5</p>
            </div>

            <div className="w-full border-b border-gray-600 my-2"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                <BiRupee />
                {total + 2.5}
              </p>
            </div>

            {user ? (
              <motion.button
             
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                 <Link to="/payment">
                 Check Out</Link>
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={empty} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
}
