import TableUser from "./TableUser";
import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.css'
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getAllUser } from '../../../services/apiService'
const ManageUser = (props) => {
    const [show,setShow]=useState(false);
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        fetchListUser();
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
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
                    <TableUser listUser={listUser}/>
                </div>
                <ModalCreateUser show={show} setShow={setShow} setListUser={setListUser} fetchListUser={fetchListUser}/>

            </div>

        </div>
    )
}
export default ManageUser;