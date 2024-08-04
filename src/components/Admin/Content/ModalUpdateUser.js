import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";
import { useResolvedPath } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { postCreateNewUser, putUpdateUser } from '../../../services/apiService';
import _ from 'lodash';

const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate } = props;
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            console.log("data update: ", dataUpdate)
            setId(dataUpdate.id);
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            console.log("Image: ",image);
            setImage("");
            if (dataUpdate.image) {
                let mimeType = 'image/jpeg'; // default MIME type

                if (dataUpdate.image.startsWith('/9j/')) {
                    mimeType = 'image/jpeg';
                } else if (dataUpdate.image.startsWith('iVBORw0KGgo')) {
                    mimeType = 'image/png';
                } else if (dataUpdate.image.startsWith('R0lGODlh')) {
                    mimeType = 'image/gif';
                }
                setImage(`data:${mimeType};base64,${dataUpdate.image}`);
                //setImage(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
           


        }
    }, [dataUpdate]);
    const handleClose = () => {
        setShow(false);
        setId("");
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        props.resetUser();
    };
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

    const handleSubmitUpdateUser = async () => {


        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     userImage: image
        // };
        // console.log(data);
        const checkEmail = validateEmail(email);
        if (!checkEmail) {

            toast.error('Invaild email!');
            return;
        }


        let res = await putUpdateUser(id, username, role, image);
        // console.log("Components ",res);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            await props.fetchListUser();
        }
        if (res && res.EC !== 0) {
            console.log("Error after process: ", res);
            toast.error(res.EM);

        }
    };
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} size='xl' backdrop='static' className='modal-add-user'>
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} disabled={true} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} disabled={true} onChange={(event) => setPassword(event.target.value)} />
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

                            {console.log("image: ",image)}

                        </div>

                    </form>

                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser