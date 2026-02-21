import { useState } from "react";
import { encryptData, decryptData } from "./cryptoUtil";

export default function UserForm() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    mobile: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";
    if (!form.lastname.trim()) err.lastname = "Last name is required";

    if (!form.mobile.trim()) {
      err.mobile = "Mobile number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(form.mobile)) {
      err.mobile = "Enter valid 10 digit mobile number";
    }

    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/^[a-z0-9._+-]+@+[a-z.]+\.[a-z]{2,3}$/.test(form.email)) {
      err.email = "Enter valid email";
    }

    if (!form.message.trim()) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    
    const old = localStorage.getItem("secureForm");
    const data = old ? decryptData(old) : [];

   
    localStorage.setItem(
      "secureForm",
      encryptData([...data, form])
    );

    alert("Form submitted successfully");

    setForm({
      name: "",
      lastname: "",
      mobile: "",
      email: "",
      message: ""
    });
    setErrors({});
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        
        <input type="text" name="name" placeholder="Name"value={form.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

       
        <input type="text" name="lastname" placeholder="Last Name"value={form.lastname}onChange={handleChange}/>
        {errors.lastname && <p style={{ color: "red" }}>{errors.lastname}</p>}

     
        <input type="text"name="mobile"placeholder="Mobile Number" value={form.mobile} required maxLength={10} onChange={handleChange} />
        {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}

        
        <input type="text" name="email" placeholder="Email" value={form.email}onChange={handleChange}/>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      
        <textarea name="message" placeholder="Message" value={form.message}onChange={handleChange}/>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
