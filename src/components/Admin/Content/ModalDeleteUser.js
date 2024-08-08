
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import {toast} from 'react-toastify';

const ModalDeleteUser=(props)=> {
  const {show, setShow, dataDelete} = props;
  
  const handleClose = () => setShow(false);
  
  const DeleteUser = async(id) => {
     let res= await deleteUser(id);
     if(res.DT && res.EC===0)
     {
       toast.success(res.EM);
       handleClose();
       await props.fetchListUserWithPaginate(props.page);
     }
     else
     {
      toast.error(res.EM);
     }

  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you sure want to delete ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>DeleteUser(dataDelete.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;