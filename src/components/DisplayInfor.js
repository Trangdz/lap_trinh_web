import React,{useState} from "react";

// class DisplayInfor extends React.Component {
//     constructor(props)
//     {
//         super(props);
//         console.log(">>> call me constructor");
       
//     }
//     handleDelete=(id)=> {
//         this.props.handleDeleteUserToList(id);
        
//     }

//     componentDidUpdate(prevProps, prevState,snapshot){
//         console.log(">>> call me DidUpdate",this.props,prevProps)
        
//     }

//     componentDidMount(){
       
//         console.log('>>>call me componentDidMount');
//         setTimeout(() => {
//             document.title='Eric & Hoi Dan it'
//         }, 3000)
//     }



//     render() {
//         console.log(">>>call me render");
//         const { listUser } = this.props;
//         return (
//             <div>
//                 {listUser.map((user) => {
//                     return (
//                         <div key={user.id}>
//                             <div>My name is {user.name}</div>
//                             <div>My address is {user.address}</div>
//                             <div>My age is {user.age}</div>
//                             <button onClick={()=>this.handleDelete(user.id)}>Delete</button>
                            
//                             <hr />
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }
// }
// place onclick in button have use "()=>this.handleDelete(user.id)", else use "this.handleDelete(user.id)" it will execute immediately

const DisplayInfor = (props) =>{
        const {listUser}=props
        const [isShowHideListUser,setShowHideListUser ]=useState(true);
        const handleShowHide=()=>{
            setShowHideListUser(!isShowHideListUser);
        }
        return (
            <div>
                <span onClick={()=>handleShowHide()}>{isShowHideListUser===true?"Hide information":"Show details"}</span>
                {listUser.map((user) => {
                    return (
                        isShowHideListUser &&
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My address is {user.address}</div>
                            <div>My age is {user.age}</div>
                            <button onClick={()=>props.handleDeleteUserToList(user.id)}>Delete</button>
                            
                            <hr />
                        </div>
                    );
                })}
            </div>
        );

}

export default DisplayInfor;