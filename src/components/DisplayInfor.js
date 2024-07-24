import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const {listUser}=this.props;
        return (
            <div>
                {listUser.map((user) => {
                    return(
                       <div key={user.id}>
                            
                                <div>My nam is {user.name}</div>
                                <div>My nam is {user.Address}</div>
                                <div>My nam is {user.age}</div>
                                <hr/>
                            
                       </div>
                    );
                })}
            </div>

        );
    }

}
export default DisplayInfor