import { useEffect, useState } from "react";
// import { decryptData } from "./Crypto";
import { decryptData } from "./cryptoUtil";

export default function AdminDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("role") !== "admin") {
      alert("Access Denied");
      return;
    }

    const cipher = localStorage.getItem("secureForm");
    if (cipher) {
      setData(decryptData(cipher));
    }
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>

      {data.length === 0 && <p>No Data Found</p>}

      {data.map((d, i) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><b>Name:</b> {d.name} {d.lastname}</p>
          <p><b>Mobile:</b> {d.mobile}</p>
          <p><b>Email:</b> {d.email}</p>
          <p><b>Message:</b> {d.message}</p>
        </div>
      ))}
    </div>
  );
}
