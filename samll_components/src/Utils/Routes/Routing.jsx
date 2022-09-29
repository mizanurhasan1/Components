import React from "react";

import { Route, Routes } from "react-router-dom";
import useUser from "../../Contexts/UserProvider/useUser";
import DashBoard from "../../Layouts/DashBoard";
import CreateSubscription from "../../Pages/CreateSubscription/CreateSubscription";
import ResetWrapper from "../../Pages/ForgetPassword/ResetWrapper";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import PoshmarkPopup from "../../Pages/PoshmarkPopup";
import Register from "../../Pages/Register";
import AuthAdmin from "../Middleware/AdminAuth/AuthAdmin";
import AuthUser from "../Middleware/AuthUser/AuthUser";

import RouteObject from "../RouteObject/RouteObject";

const Routing = () => {
  const [thisUser] = useUser();
  const RouteComInfo = RouteObject();
  console.log(RouteComInfo.adminItems);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset-password" element={<ResetWrapper />}></Route>
        <Route path="/popup" element={<PoshmarkPopup />}></Route>

        {/* Dashboard routings */}
        {thisUser && (
          <Route path="/dashboard" element={<DashBoard />}>
            {thisUser?.isAdmin ? (
              <>
                {RouteComInfo?.adminItems?.map((data, key) => (
                  <Route
                    key={key}
                    path={data.root}
                    element={<AuthAdmin>{data.component}</AuthAdmin>}
                  ></Route>
                ))}
              </>
            ) : (
              RouteComInfo?.menuList?.map((data, key) => (
                <Route
                  key={key}
                  path={data.root}
                  element={<AuthUser>{data.component}</AuthUser>}
                ></Route>
              ))
            )}
          </Route>
        )}

        <Route path="/notfound" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
