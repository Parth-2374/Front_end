import { useEffect, useState } from "react";
import { decryptData, encryptData } from "./cryptoUtil";

export default function AdminPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("role") !== "admin") {
      alert("Access Denied");
      window.location.href = "/user";
      return;
    }

    const cipher = localStorage.getItem("secureForm");
    if (cipher) {
      const decrypted = decryptData(cipher);
      setData(Array.isArray(decrypted) ? decrypted : []);
    }
  }, []);

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);

    localStorage.setItem(
      "secureForm",
      encryptData(updatedData)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>
                  <button
                    onClick={() => deleteData(index)}
                    style={{ background: "red", color: "white" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
