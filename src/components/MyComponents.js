import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponents extends React.Component {
    state = {
        listUser: [
            { id: "1", name: "Trang", address: "Thanh Hoa", age: 21 },
            { id: "2", name: "Duy", address: "Ha Noi", age: 22 },
            { id: "3", name: "Nhat", address: "Nam Dinh", age: 23 }
        ]
    };

    handleAddUserToList = (newUser) => {
        const newListUser = [...this.state.listUser, { id: Date.now(), ...newUser }];
        this.setState({
            listUser: newListUser
        });
    };
    
    handleDeleteUserToList = (id) => {
        const newListUser = this.state.listUser.filter((user) => 
           {
                return user.id !== id;
           } );
        this.setState({
            listUser: newListUser
        });
    };

    render() {
        return (
            <div>
                <UserInfor onAddUser={this.handleAddUserToList} />
                <br />
                <DisplayInfor listUser={this.state.listUser} handleDeleteUserToList={this.handleDeleteUserToList} />
            </div>
        );
    }
}

export default MyComponents;