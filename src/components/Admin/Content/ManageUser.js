import TableUser from "./TableUser";
import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.css'
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getAllUser, getUserPaginate } from '../../../services/apiService'
import ModalUpdateUser from './ModalUpdateUser';
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = (props) => {
    const LIMIT_USER = 7;
    const [show, setShow] = useState(false);
    const [page, setPage] = useState(1);
    const [currentPage, setCurentPage] = useState(1);
    const [totalPage, setToTalPage] = useState(0);
    const [listUser, setListUser] = useState([]);
    const [showUpdate, setShowUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [showDelete, setShowDelete] = useState(false);
    useEffect(() => {
        // fetchListUser();
        const page = 1;
        fetchListUserWithPaginate(page);
    }, [])

    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUser(res.DT);

        }
    }
    const fetchListUserWithPaginate = async (page) => {

        let res = await getUserPaginate(page, LIMIT_USER);

        if (res.EC === 0) {
            setListUser(res.DT.users);
            setToTalPage(res.DT.totalPages);

        }
    }
    const handleUpdate = (user) => {
        setShowUpdate(true);
        setDataUpdate(user);
    }

    const handleDelete = (user) => {
        setShowDelete(true);
        setDataDelete(user);
    }

    const resetUser = () => {
        setDataUpdate({});
    }
    return (
        <div className="manage-user-container">

            <div className="title">

            </div>

            <div className="user-content">
                <div>
                    <button className="btn btn-primary" onClick={() => setShow(true)}><FaPlusCircle />Add new users</button>
                </div>

                <div>
                    {/* <TableUser listUser={listUser} handleUpdate={handleUpdate}  handleDelete={handleDelete}/> */}
                    <TableUserPaginate
                        listUser={listUser}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        fetchListUserWithPaginate={fetchListUserWithPaginate}
                        currentPage={currentPage}
                        setCurentPage={setCurentPage}
                        totalPage={totalPage} page={page} setPage={setPage} />
                </div>
                <ModalCreateUser
                    show={show}
                    setShow={setShow}
                    setListUser={setListUser}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurentPage={setCurentPage}
                    page={page} />
                <ModalUpdateUser
                    show={showUpdate}
                    setShow={setShowUpdate}
                    resetUser={resetUser}
                    dataUpdate={dataUpdate}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurentPage={setCurentPage}
                    page={page} />
                <ModalDeleteUser
                    show={showDelete}
                    setShow={setShowDelete}
                    dataDelete={dataDelete}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurentPage={setCurentPage}
                    page={page} />
            </div>

        </div>
    )
}
export default ManageUser;