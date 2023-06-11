import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateData = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        id: id,
        date: '',
        clientname: '',
        phone: '',
        visited: false,
        callstatus: false,
        email: '',
        detail: '',
        worklocation: '',
        residancelocation: '',
        aboutfam: '',
        agegroup: '',
        income: ''
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setData({...data, [name]: value});
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user/enquiry-detail/${id}/`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            }
        }).then((response) => {
            setData(
                {
                    ...data,
                    id: response.data.id,
                    date: response.data.date,
                    clientname: response.data.clientname,
                    phone: response.data.phone,
                    visited: response.data.visited,
                    callstatus: response.data.callstatus,
                    email: response.data.email,
                    detail: response.data.detail,
                    worklocation: response.data.worklocation,
                    residancelocation: response.data.residancelocation,
                    aboutfam: response.data.aboutfam,
                    agegroup: response.data.agegroup,
                    income: response.data.income
                }
            )
        }).catch((error) =>{
            console.log(error);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        await axios.post(`${process.env.REACT_APP_BASE_URL}/user/enquiry-update/${id}/`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            },
            id: id,
            date: data.date,
            clientname: data.clientname,
            phone: data.phone,
            visited: data.visited,
            callstatus: data.callstatus,
            email: data.email,
            detail: data.detail,
            worklocation: data.worklocation,
            residancelocation: data.residancelocation,  
            aboutfam: data.aboutfam,
            agegroup: data.agegroup,
            income: data.income
        }).then((response) => {
            navigate('/customer-detail')
        }).catch((err) => {
            console.log(err);
        });
    }
    
    return (
        <div className="update-customer-wrapper">
            <form>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="clientname">Name</label>
                            <input 
                                type="text" 
                                name="clientname" 
                                id="clientname"
                                onChange={e => handleChange(e)}
                                value={data.clientname}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="date">Date</label>
                            <input 
                                type="date" 
                                name="date" 
                                id="date"
                                value={data.date}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="text"
                                name="phone"
                                id="phone"
                                value={data.phone}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="agegroup">Age Group</label>
                            <input 
                                type="text" 
                                name="agegroup" 
                                id="agegroup"
                                value={data.agegroup}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="detail">Detail</label>
                            <textarea 
                                name="detail" 
                                id="detail"
                                value={data.detail}
                                onChange={e => handleChange(e)}
                            ></textarea>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="visited">Visited</label>
                            <input 
                                type="checkbox" 
                                name="visited" 
                                id="visited"
                                checked={data.visited}
                                onChange={e => handleChange(e)} 
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="eamil"
                                value={data.email}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="worklocation">Work Location</label>
                            <input 
                                type="text" 
                                name="worklocation" 
                                id="worklocation"
                                value={data.worklocation} 
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="residancelocation">Residance Location</label>
                            <input 
                                type="text" 
                                name="residancelocation" 
                                id="residancelocation"
                                value={data.residancelocation}
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="income">Income</label>
                            <input 
                                type="text" 
                                name="income" 
                                id="income"
                                value={data.income}
                                onChange={e => handleChange(e)} 
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="aboutfam">About Family</label>
                            <textarea 
                                name="aboutfam" 
                                id="aboutfam"
                                value={data.aboutfam}
                                onChange={e => handleChange(e)}
                            ></textarea>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="callstatus">Call Status</label>
                            <input 
                                type="checkbox" 
                                name="callstatus" 
                                id="callstatus"
                                checked={data.callstatus}
                                onChange={e => handleChange(e)} 
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="form-submit" onClick={(e) => handleSubmit(e)} >Submit</button>
            </form>
        </div>
    );
};
