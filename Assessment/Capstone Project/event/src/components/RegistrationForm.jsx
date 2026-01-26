import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRegistration } from "../features/registrationSlice";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

export default function RegistrationForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        session: "",
        type: "Online"
    });

    const submit = e => {
        e.preventDefault();

        if (form.name.length < 3) return alert("Name min 3 chars");
        if (!form.email.includes("@")) return alert("Invalid Email");
        if (form.phone.length !== 10) return alert("Phone must be 10 digits");

        dispatch(addRegistration(form));
        setForm({ name: "", email: "", phone: "", session: "", type: "Online" });
    };

    return (
        <div>
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow  style={{marginTop:"-70px"}}>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center '>

                                <h3 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 "style={{marginTop:"90px"}}>Add Registration</h3>

                                <div className="d-flex flex-row align-items-center mb-4 mt-3 ">
                                    <MDBIcon fas icon="user me-3" size='lg'  />
                                    <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput label='Your Email' id='form2' type='email' value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="phone me-3" size='lg' />
                                    <MDBInput label='Phone Number' maxLength={10}  pattern="[0-9]{10}" id='form3' type='tel' value={form.phone}
                                        onChange={e => setForm({ ...form, phone: e.target.value })} />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="face-smile me-3" size='lg' />
                                    <MDBInput label='Enter Your session' id='form4' type='txt' value={form.session}
                                        onChange={e => setForm({ ...form, session: e.target.value })} />
                                </div>
                                <select className="w-25 p-2 mb-3"  onChange={e => setForm({ ...form, type: e.target.value })}>
                                    <option>Online</option>
                                    <option>Offline</option>
                                </select>

                                <MDBBtn className='mb-4' size='lg' onClick={submit}>Register</MDBBtn>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center '>
                                <MDBCardImage src='public/logo.png' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    );
}
