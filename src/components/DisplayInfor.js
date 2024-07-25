import React from "react";

class DisplayInfor extends React.Component {
    handleDelete=(id)=> {
        this.props.handleDeleteUserToList(id);
    }
    render() {
        const { listUser } = this.props;
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My address is {user.address}</div>
                            <div>My age is {user.age}</div>
                            <button onClick={()=>this.handleDelete(user.id)}>Delete</button>
                            
                            <hr />
                        </div>
                    );
                })}
            </div>
        );
    }
}
// place onclick in button have use "()=>this.handleDelete(user.id)", else use "this.handleDelete(user.id)" it will execute immediately
export default DisplayInfor;