
import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.css'
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
const ManageUser = (props) => {
    const [show,setShow]=useState(false);
    
    return (
        <div className="manage-user-container">

            <div className="title">

            </div>

            <div className="user-content">
                <div>
                    <button className="btn btn-primary" onClick={()=>setShow(true)}><FaPlusCircle/>Add new users</button>
                </div>

                <div>
                    table users
                    
                </div>
                <ModalCreateUser show={show} setShow={setShow}/>

            </div>

        </div>
    )
}
export default ManageUser;