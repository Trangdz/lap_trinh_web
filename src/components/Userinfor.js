import React from "react";

class UserInfor extends React.Component {
    state = {
        id: "",
        name: "",
        address: "",
        age: ""
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.onAddUser({
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            age: this.state.age
        });
        this.setState({
            id: "",
            name: "",
            address: "",
            age: ""
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        type="text"
                        name="id"
                        placeholder="Id"
                        value={this.state.id}
                        onChange={this.handleOnChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={this.handleOnChange}
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.handleOnChange}
                    />
                    <button type="submit">Add User</button>
                </form>
            </div>
        );
    }
}

export default UserInfor;