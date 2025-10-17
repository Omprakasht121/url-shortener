import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../../modules/user/pages/Register";
import Home from "../../modules/landing-page/Home";
import { Login } from "../../modules/user/pages/Login";
import { DashBoard } from "../../modules/dashboard/DashBoard";
export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
    );
}