import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreateUser() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} size='xl' backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label  className="form-label">Email</label>
                            <input type="email" className="form-control"  />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Username</label>
                            <input type="text" className="form-control" />
                        </div>


                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select id="inputState" className="form-select">
                                <option selected>USER</option>
                                <option>ADMIN</option>
                            </select>
                        </div>
                        
                        <input type='file'/>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>

                </Modal.Body>


                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser