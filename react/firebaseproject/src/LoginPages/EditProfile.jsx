import { useState } from "react";
import { auth } from "../Firebase/firebase";
import { updateProfile, updateEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Update Name
      if (name !== user.displayName) {
        await updateProfile(user, {
          displayName: name
        });
      }

      // ✅ Update Email
      if (email !== user.email) {
        await updateEmail(user, email);
      }

      alert("Profile Updated Successfully ✅");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="vh-100 bg-dark d-flex justify-content-center align-items-center">
      <div className="card bg-dark text-white p-4" style={{ width: "420px" }}>
        <h3 className="text-center mb-4">Edit Your Profile</h3>

        <form onSubmit={handleUpdate}>

          <label className="mb-1">Your Name</label>
          <input
            type="text"
            className="form-control mb-3 text-white border border-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="mb-1">Your Email</label>
          <input
            type="email"
            className="form-control mb-4 text-white border border-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            className="btn btn-success w-100"
            disabled={loading}
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>

        </form>

        <button
          className="btn btn-secondary w-100 mt-3"
          onClick={() => navigate("/dashboard")}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

export default EditProfile;
