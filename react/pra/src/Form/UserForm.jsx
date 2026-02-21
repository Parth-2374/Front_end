import { useState } from "react";
// import { encryptData, decryptData } from "./Crypto";
import { encryptData, decryptData } from "./cryptoUtil";

export default function UserForm() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    mobile: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");

  const validate = () => {
    if (!form.name) return "Name required";
    if (!form.lastname) return "Last name required";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) return "Invalid mobile number";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Invalid email";
    if (!form.message) return "Message required";
    return "";
  };

  const submitForm = (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    const old = localStorage.getItem("secureForm");
    const data = old ? decryptData(old) : [];

    localStorage.setItem(
      "secureForm",
      encryptData([...data, form])
    );

    alert("Form Submitted Successfully");

    setForm({
      name: "",
      lastname: "",
      mobile: "",
      email: "",
      message: ""
    });
    setError("");
  };

  return (
    <form onSubmit={submitForm}>
      <h2>User Form</h2>

      <input placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input placeholder="Last Name"
        value={form.lastname}
        onChange={e => setForm({ ...form, lastname: e.target.value })}
      />

      <input placeholder="Mobile"
        value={form.mobile}
        onChange={e => setForm({ ...form, mobile: e.target.value })}
      />

      <input placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <textarea placeholder="Message"
        value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
