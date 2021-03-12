// import React, { useState, useEffect} from 'react';
// import Admin from './Admin';
// import base_url from './../api/bootapi';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const AllAdmin=()=>{
//     useEffect(()=>{
//         document.title="Admin List || LMS"
//     }, []);
//      //function to call server
//     const getAllAdminsFromServer=()=>{
//         axios.get(`${base_url}/admin/list/`).then(
//             (response)=>{
//                 //console.log(response);
//                 console.log(response.data);
//                 toast.success("Admin List has been Loaded",{
//                     position:'bottom-center',
//                 });
//                 setAdmins(response.data);
//             },(error)=>{
//                 console.log(error);
//                 toast.error("something went wrong");
//             }
//         );
//     };

//     //calling loading course function
//     useEffect(()=>{
//         getAllAdminsFromServer();
//     },[]);

//     const [admins, setAdmins]=useState([]);

//     return (
//         <div>
//             <h1>All Admin Details</h1>
//             {admins.length > 0
//                 ? admins.map((item)=><Admin key={item.adminId} admin={item} />)
//             : "No Admins"}
            
//         </div>
//     )
// }

// export default AllAdmin;