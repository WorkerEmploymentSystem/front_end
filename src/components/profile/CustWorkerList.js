import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from '../../api/bootapi';

const CustWorkerList=(props)=>{


const [workData, setWorkData]=useState();   

const id = props.id;

useEffect(()=>{
    axios.get(`${base_url}/user/getWorkDesc/${id}`).then((res)=>{
        console.log(res.data);
        setWorkData(res.data);
    });
});


return <div>{
                !workData ? ("No Work Found") : (
                    <table className="table table-bordered table-success">
                        <thead className="table-dark">
                            <tr>
                                <th>Salary</th>
                                <th>Work</th>
                                <th>Location</th>
                                <th>Work Type</th>
                            </tr>
                        </thead>
                        <tbody className="table-active">
                            {
                                workData.map((workDescription, index)=>(
                                    <tr key={index}>
                                        <td>{workDescription.workAmount}</td>
                                        <td>{workDescription.description}</td>
                                        <td>{workDescription.location}</td>
                                        <td>{workDescription.category}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
            {/* <nav className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-link">1</li>
                </ul>
            </nav> */}
            <br /><br/>
            
        </div>
    
}
export default CustWorkerList;