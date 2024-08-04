import { useEffect, useState } from 'react';
import './TableUser.css';
import { getAllUser } from '../../../services/apiService'
const TableUser = (props) => {
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
        <>
            <table className="table table-hover table-border table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (

                                <tr>
                                    <td scope="col">{index + 1}</td>
                                    <td scope="col">{item.username}</td>      
                                    <td scope="col">{item.email}</td>
                                    <td scope="col">{item.role}</td>
                                    <td scope="col">
                                        <button className='btn btn-primary'>View</button>
                                        <button className='btn btn-warning'>Update</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>

                            )
                        })
                    }



                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>
        </>

    )
}
export default TableUser;