import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class MyComponents extends React.Component{
    //JSX
   
        listUser=[
            {id:1,name:"Trang" ,Address:"Thanh Hoa", age:21},
            {id:2,name:"Duy" ,Address:"Ha Noi", age:22},
            {id:3,name:"Nhat" ,Address:"Nam Dinh", age:23}
        ]
   
    render(){
        //props => viết tắt properties
        
         
        return(
            <div>
                <UserInfor ></UserInfor>
                <br></br>
                <DisplayInfor listUser={this.listUser}></DisplayInfor>
            </div>
        );
    }
}
export default MyComponents