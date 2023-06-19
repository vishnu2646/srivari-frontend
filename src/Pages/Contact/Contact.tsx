/* eslint-disable jsx-a11y/iframe-has-title */
import axios from "axios";
import React, { useRef, useState } from "react";
import { convertToBoolean } from "../../utils/utils";
import { ToastContainer, toast } from "react-toastify";

export const Contact = () => {

    const [enquiryData, setEnquiryData] = useState({
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
    });
    const [enquiryMessage, setEnquiryMessage] = useState();

    const dialogRef = useRef<HTMLDialogElement>(null);

    const OpenModal = () => {
        dialogRef.current?.showModal();
    }

    const handleChange = (e: any) => {
        setEnquiryData({...enquiryData, [e.target.name]: e.target.value});       
    }

    const handleSubmit = async (event: any): Promise<void> => {
        event.preventDefault();

        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/enquiry-create/`, {
            date: enquiryData.date,
            clientname: enquiryData.clientname,
            phone: enquiryData.phone,
            visited: convertToBoolean(enquiryData.visited),
            callstatus: convertToBoolean(enquiryData.callstatus),
            email: enquiryData.email,
            detail: enquiryData.detail,
            worklocation: enquiryData.worklocation,
            residancelocation: enquiryData.residancelocation,
            aboutfam: enquiryData.aboutfam,
            agegroup: enquiryData.agegroup,
            income: enquiryData.income
        });

        const message = await response.data;
        setEnquiryMessage(message);
        if(response.status === 200) {
            toast.success("Your data is submitted and " + enquiryMessage);
        }
        dialogRef.current?.close();
    }

    return (
        <div className="contact-page-container" id="contact-us">
            <h1><span>C</span>ontact us</h1>
            <ToastContainer />
            <div className="contact-page-content">
                <div className="contact-page-left-content">
                    <div className="contact-page-buttons">
                        <button className="register" data-open-modal onClick={OpenModal}>Register</button>
                        <dialog data-modal ref={dialogRef}>
                            <h2>Register For Enquiry</h2>
                            <form>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="clientname">Name</label>
                                            <input type="text" name="clientname" id="clientname" onChange={e => handleChange(e)} />
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="date">Date</label>
                                            <input type="date" name="date" id="date"  onChange={e => handleChange(e)}/>
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" name="phone" id="phone"  onChange={e => handleChange(e)}/>
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="agegroup">Age Group</label>
                                            <input type="text" name="agegroup" id="agegroup"  onChange={e => handleChange(e)}/>
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="detail">Detail</label>
                                            <textarea name="detail" id="detail" onChange={e => handleChange(e)}></textarea>
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="visited">Visited</label>
                                            <input type="checkbox" name="visited" id="visited" onChange={e => handleChange(e)} />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" name="email" id="eamil" onChange={e => handleChange(e)} />
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="worklocation">Work Location</label>
                                            <input type="text" name="worklocation" id="worklocation"  onChange={e => handleChange(e)}/>
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="residancelocation">Residance Location</label>
                                            <input type="text" name="residancelocation" id="residancelocation" onChange={e => handleChange(e)} />
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="income">Income</label>
                                            <input type="text" name="income" id="income" onChange={e => handleChange(e)} />
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="aboutfam">About Family</label>
                                            <textarea name="aboutfam" id="aboutfam" onChange={e => handleChange(e)}></textarea>
                                        </div>
                                        <div style={{ marginTop: '10px' }}>
                                            <label htmlFor="callstatus">Call Status</label>
                                            <input type="checkbox" name="callstatus" id="callstatus" onChange={e => handleChange(e)} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" formMethod="dialog" style={{ cursor: 'pointer' }}>close</button>
                                <button type="submit" className="form-submit" style={{ cursor: 'pointer' }} onClick={handleSubmit}>Submit</button>
                            </form>
                        </dialog>
                        <button className="faq">Faq'<span>s</span></button>
                    </div>
                    <div className="contact-page-contacts">
                        <div className="contact-page-contact-item-1">
                            <i className="fa-solid fa-phone fa-shake"></i>
                            <span>+91 9585900007</span>
                        </div>
                        <div className="contact-page-contact-item-2">
                            <i className="fa-solid fa-phone fa-shake"></i>
                            <span>+91 8940961411</span>
                        </div>
                        <div className="contact-page-contact-item-3">
                            <i className="fa-regular fa-envelope" style={{color: "#ff3705"}}></i>
                            <span className="mail">srivarisuvarnasubikhaa2023@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact-page-address">
                        QV75+36 Srivari Suvarna Subiskhaa Homes, Marasandiram, Hosur, <br/>Tamil Nadu - 635109
                    </div>
                </div>
                <div className="contact-page-right-content">
                    <div className="map">
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=srivari%20suvarna%20subikshaa%20Homes,%20Hosur+(srivari%20suvarna%20subikshaa%20Homes)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.maps.ie/distance-area-calculator.html">
                                measure area map
                            </a>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};
