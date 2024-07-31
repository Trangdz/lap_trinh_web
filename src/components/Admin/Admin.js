import SideBar from "./Sidebar";
import './Admin.css';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleOnClick = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}/>
            </div>
            <div className="admin-content">
                <FaBars onClick={()=> handleOnClick()} />
            </div>
        </div>
    )
}

export default Admin;
