import TableUser from "./TableUser";
import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.css'
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getAllUser } from '../../../services/apiService'
import ModalUpdateUser from './ModalUpdateUser';
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser = (props) => {
    const [show,setShow]=useState(false);
    const [listUser, setListUser] = useState([]);
    const [showUpdate,setShowUpdate]=useState(false);
    const [dataUpdate,setDataUpdate]=useState({});
    const [dataDelete,setDataDelete]=useState({});
    const [showDelete,setShowDelete]=useState(false);
    useEffect(() => {
        fetchListUser();
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    }
    const handleUpdate = (user)=>{
        setShowUpdate(true);
        setDataUpdate(user);
    }

    const handleDelete= (user)=>{
        setShowDelete(true);
        setDataDelete(user);
    }

    const resetUser=()=>{
        setDataUpdate({});
    }
    return (
        <div className="manage-user-container">

            <div className="title">

            </div>

            <div className="user-content">
                <div>
                    <button className="btn btn-primary" onClick={()=>setShow(true)}><FaPlusCircle/>Add new users</button>
                </div>

                <div>
                    <TableUser listUser={listUser} handleUpdate={handleUpdate}  handleDelete={handleDelete}/>
                </div>
                <ModalCreateUser show={show} setShow={setShow} setListUser={setListUser} fetchListUser={fetchListUser}/>
                <ModalUpdateUser show={showUpdate}  setShow={setShowUpdate} resetUser={resetUser} dataUpdate={dataUpdate} fetchListUser={fetchListUser}/>
                <ModalDeleteUser show={showDelete} setShow={setShowDelete}  dataDelete={dataDelete} fetchListUser={fetchListUser}/>
            </div>

        </div>
    )
}
export default ManageUser;