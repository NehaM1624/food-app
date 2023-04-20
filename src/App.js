import { Route, Router, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import MainContainer from "./components/MainContainer";
import AddItem from "./components/AddItem";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { useStateValue } from "./context/StateProvider";
//import { Button } from "@material-ui/core";

import CardForm from "./components/Payment";
import { actionType } from "./context/Reducer";
import Dashbord from "./components/Dashbord";
import { getData } from "./utils/axiosFunction";
import PrivateRoute from "./components/PrivateRoute";
import WrongUser from "./components/WrongUser";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchItems = async () => {
    await getData().then((data) => {
      console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      <AnimatePresence>
        <div
          className="flex flex-col "
          style={{
            height: "auto",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(245 243 243)",
          }}
        >
          <Header />

          <SideBar />
          <main
            className="md:mt-20 md:px-16 "
            style={{
              marginTop: "4rem",
              padding: "0rem",
              width: "100%",
            }}
          >
            <Routes>
              <Route exact path="/dashbord" element={<PrivateRoute />} />
              <Route exact path="/dashbord" element={<Dashbord />} />
              <Route path="/payment" element={<CardForm />} />

              <Route path="/*" element={<MainContainer />} />
              <Route path="/createItem" element={<AddItem />} />
              <Route path="/wrongUser" element={<WrongUser />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>
        </div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
