import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DownloadTableExcel } from 'react-export-table-to-excel';

export interface EnquiryInterface {
    id: number,
    date: string,
    clientname: string,
    phone: string,
    visited: boolean,
    callstatus: boolean,
    email: string,
    detail: string,
    worklocation: string,
    residancelocation: string,
    aboutfam: string,
    agegroup: string,
    income: string
}

export const Customerdata = () => {
    const [enquiryData, setEnquiryData] = useState<EnquiryInterface[]>([]);
    const [isAdminUser, setIsAdminUser] = useState(false);
    const tableRef = useRef(null);

    const navigate = useNavigate();

    const fetchEnquiryData = async() => {
        const response = await axios.get('http://127.0.0.1:8000/api/user/enquiry-list/', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            }
        });
        const data = await response.data;
        setEnquiryData(data);
    }

    const checkUserIsAdmin = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/user/is-admin-user/', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            }
        });
        const data = await response.data.admin;
        setIsAdminUser(data);
        if(!data) {
            navigate('/');
        }
    }

    useEffect(() => {
        fetchEnquiryData();
        checkUserIsAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleDelete = async (id: number) => {
        await axios.delete(`http://127.0.0.1:8000/api/user/enquiry-delete/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            }
        })
        alert("Data Deleted")
        fetchEnquiryData();
    }

    const updateData = (data: EnquiryInterface) => {
        navigate(`/update/${data.id}`);
    }

    const CustomerData = () => {
        return (
            <div className="customer-data-wrapper" style={{ flexDirection: 'column' }}>
                <h2 className="center-text">Customer data</h2>
                <DownloadTableExcel
                    filename="CustomerDetails"
                    sheet="details"
                    currentTableRef={tableRef.current}
                >
                    <button className="export-excel-btn">
                        <i className="fa-solid fa-download"></i>
                        Export excel 
                    </button>
                </DownloadTableExcel>
                <div className="table-responsive">
                    <table  ref={tableRef}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Client Name</th>
                                <th>Phone</th>
                                <th>Visited</th>
                                <th>Call Status</th>
                                <th>Email</th>
                                <th>Detail</th>
                                <th>Work Location</th>
                                <th>Residance Location</th>
                                <th>About Family</th>
                                <th>Age Group</th>
                                <th>Anual Income</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enquiryData.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.id}</td>
                                            <td>{data.clientname}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.visited ? "visited" : "Not Visited"}</td>
                                            <td>{data.callstatus ? "called" : "Not called"}</td>
                                            <td>{data.email}</td>
                                            <td>{data.detail}</td>
                                            <td>{data.worklocation}</td>
                                            <td>{data.residancelocation}</td>
                                            <td>{data.aboutfam}</td>
                                            <td>{data.agegroup}</td>
                                            <td>{data.income}</td>
                                            <td id="actions">
                                                <i 
                                                    className="fa-solid fa-pencil" 
                                                    style={{color: "#00837c"}} 
                                                    onClick={() => {
                                                        updateData(data);
                                                    }}
                                                ></i>    
                                                <i className="fa-solid fa-trash" style={{color: "#ff0000"}} onClick={() => handleDelete(data.id)}></i>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return <div><CustomerData /></div>;
};

