import axiosCustomize from "../utils/axiosCustomize";
const postCreateNewUser =(email,password, username,role,image) =>{
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axiosCustomize.post('api/v1/participant', data);
}
const getAllUser=()=>{
    return axiosCustomize.get('api/v1/participant/all');
}
const putUpdateUser=(id,username,role,image) =>{
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axiosCustomize.put('api/v1/participant', data);
}

const deleteUser=(uerId)=>{
    return axiosCustomize.delete("api/v1/participant",{data:{id:uerId}});
}
const getUserPaginate=(page,limit)=>{
    return axiosCustomize.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

const postLogin=(emailUser,passwordUser)=>{
    return axiosCustomize.post(`api/v1/login`,{email:emailUser,password:passwordUser});
}
export {postCreateNewUser,getAllUser,putUpdateUser,deleteUser,getUserPaginate,postLogin}