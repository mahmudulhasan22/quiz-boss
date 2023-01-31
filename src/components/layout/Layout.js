import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Navbar from '../navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;