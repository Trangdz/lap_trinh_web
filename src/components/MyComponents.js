import React, { useState } from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";


// class MyComponents extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listUser: [
//                 { id: "1", name: "Trang", address: "Thanh Hoa", age: 21 },
//                 { id: "2", name: "Duy", address: "Ha Noi", age: 22 },
//                 { id: "3", name: "Nhat", address: "Nam Dinh", age: 23 }
//             ],
//             Hide: false
//         };
//     }

//     handleAddUserToList = (newUser) => {
//         const newListUser = [...this.state.listUser, { id: Date.now(), ...newUser }];
//         this.setState({
//             listUser: newListUser
//         });
//     };

//     handleDeleteUserToList = (id) => {
//         const newListUser = this.state.listUser.filter((user) => 
//            {
//                 return user.id !== id;
//            } );
//         this.setState({
//             listUser: newListUser
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <UserInfor onAddUser={this.handleAddUserToList} />
//                 <br />
//                 <DisplayInfor listUser={this.state.listUser} handleDeleteUserToList={this.handleDeleteUserToList}  />
//             </div>
//         );
//     }
// }
const MyComponents = (props) => {
    const [listUser, setListUser] = useState(
        [
            { id: "1", name: "Trang", address: "Thanh Hoa", age: 21 },
            { id: "2", name: "Duy", address: "Ha Noi", age: 22 },
            { id: "3", name: "Nhat", address: "Nam Dinh", age: 23 },
        ]
    );
    const handleAddUserToList = (userObj) => {
        setListUser([userObj, ...listUser])
    }
    const handleDeleteUserToList = (userId) => {
        const newListUser = listUser.filter((item) => item.id !== userId);
        setListUser(newListUser);
    }
    return (
        <>
            <div>
                <UserInfor onAddUser={handleAddUserToList} />
                <br />
                <DisplayInfor listUser={listUser} handleDeleteUserToList={handleDeleteUserToList} />
            </div>
        </>

    )
};
export default MyComponents;