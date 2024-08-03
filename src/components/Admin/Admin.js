import SideBar from "./Sidebar";
import './Admin.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleOnClick = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => handleOnClick()} />
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>

            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
               
            />
        </div>
    )
}

export default Admin;
