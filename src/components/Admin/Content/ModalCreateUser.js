import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";
import { useResolvedPath } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

const ModalCreateUser = (props) => {
    const { show, setShow } = props;
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const handleClose = () =>{
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");

    } ;
    const handleImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const validateEmail = (email) => {
        return (String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ));
      };
    // const handleShow = () => setShow(true);

    const handleSubmitCreateUser = async() => {
        
      
        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     userImage: image
        // };
        // console.log(data);
        const checkEmail=validateEmail(email);
        if(!checkEmail)
        {
           
            toast.error('Invaild email!');
            return;
        }

        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        data.append('username', username);
        data.append('role', role);
        data.append('userImage', image);

       let res=await axios.post('http://localhost:8081/api/v1/participant', data);
        
        if(res.data && res.data.EC===0)
        {
            toast.success(res.data.EM);
            handleClose();
        }
        if(res.data && res.data.EC!==0)
        {
            toast.error(res.data.EM);

        }
    };
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} size='xl' backdrop='static' className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>


                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select id="inputState" className="form-select" onChange={(event) => setRole(event.target.value)}>
                                <option>USER</option>
                                <option>ADMIN</option>
                            </select>
                        </div>

                        {/* <input type='file'/>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div> */}
                        <div className="col-md-12" >
                            <FaPlusCircle />
                            <label className="form-label lable-upload" htmlFor='lableUpload' >Upload File Image</label>
                            <input type="file" hidden id="lableUpload" onChange={(event) => handleImage(event)} />
                        </div>

                        <div className="col-md-12 img-preview">
                            {image ? <img src={image} /> : <span>Preview Image</span>}



                        </div>

                    </form>

                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser