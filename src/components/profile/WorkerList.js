import React, { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { Button } from 'react-bootstrap';

const WorkerList = (props) => {


    const [workData, setWorkData] = useState();



    useEffect(() => {
        axios.get(`${base_url}/user/workDetails/${props.category}`).then((res) => {
            console.log(res.data);
            setWorkData(res.data);
        });
    }, [props.category]);


    return <div>{
        !workData ? ("No Work Found") : (
            <table className="table table-bordered table-success">
                <thead className="table-dark">
                    <tr>
                        <th className="text-center">Salary</th>
                        <th className="text-center">Work</th>
                        <th className="text-center">Location</th>
                        <th className="text-center">Work Type</th>
                        <th className="text-center">Click to Apply</th>
                    </tr>
                </thead>
                <tbody className="table-primary">
                    {
                        workData.map((workDescription, index) => (
                            <tr key={index}>
                                <td className="text-center">{workDescription.workAmount}</td>
                                <td className="text-center">{workDescription.description}</td>
                                <td className="text-center">{workDescription.location}</td>
                                <td className="text-center">{workDescription.category}</td>
                                <td className="text-center"><Button>Apply</Button></td>
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
        {/* <br /><br/>
            <nav className="d-flex justify-content-center h-25"><Button>ADD WORK</Button><Button className="ml-4">DELETE WORK</Button><Button className="ml-4">UPDATE WORK</Button></nav> */}
    </div>

}
export default WorkerList;