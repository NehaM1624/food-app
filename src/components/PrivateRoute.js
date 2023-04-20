import React from "react";
import { useStateValue } from "../context/StateProvider";
import { Route, Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute(Component) {
  const [{ user }, dispatch] = useStateValue();
  return user !== null ? (
    user.email === "nehamondal1316@gmail.com" ? (
      <Outlet />
    ) : (
      <Navigate to="/wrongUser" />
    )
  ) : (
    <Navigate to="/wrongUser" />
  );
}
