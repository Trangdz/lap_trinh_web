import React from "react";
class UserInfor extends React.Component {
    state = {
        name: "Trang",
        address: "Thanh Hoa",
        age: 21
    };

    handleclick = (event) => {
        console.log(">> click me my button");
        console.log("My name is ", this.state.name)
        this.setState({
            name: "Eric"
        })
    };
    handleOnMouse = (event) => {
        console.log("My name is Mouse");
        console.log(this.state)
    };

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    handleOnSubmit = (event) => {
        event.preventDefault();

    }
    render() {
        return (
            <div>
                my name  is {this.state.name}
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" onChange={this.handleOnChange}></input>
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}
export default UserInfor