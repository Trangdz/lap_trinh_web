import User from './components/User/User';
import Admin from './components/Admin/Admin';
import App from './App';
import HomePage from './components/Home/HomePage';
import Dashboard from './components/Admin/Content/Dashboard';
import ManageUser from './components/Admin/Content/ManageUser';
import Login from './components/Auth/Login';
import {  Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='user' element={<User />} />

                </Route>
                <Route path='admin' element={<Admin />} >
                    <Route index element={<Dashboard />} />
                    <Route path='manage-users' element={<ManageUser />} />
                </Route>
                <Route path='login' element={<Login />} />
            </Routes>
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
        </>
    )
}
export default Layout;