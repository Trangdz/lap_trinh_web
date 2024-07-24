import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component{
    //JSX
    render(){
        //props => viết tắt properties
        return(
            <div>
                <UserInfor ></UserInfor>
                <br></br>
                <DisplayInfor name="Trang" age="21"></DisplayInfor>
                <hr/>
                <DisplayInfor name="Quy" age="21"></DisplayInfor>
            </div>
        );
    }
}
export default MyComponents