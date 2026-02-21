import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email 📧");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="vh-100 bg-dark d-flex justify-content-center align-items-center">
      <div className="card text-white p-4 bg-black">
        <h3 className="text-center mb-4">Reset Password</h3>

        <form onSubmit={handleReset}>
          <input
            type="email"
            className="form-control mb-4 border"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="btn btn-warning w-100">
            Send Reset Link
          </button>
        </form>

        <button
          className="btn btn-secondary w-100 mt-3"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
        <button
          className="btn btn-info w-100 mt-3"
          onClick={() => navigate("/")}
        >
        Home page
        </button>
      </div>
    </section>
  );
}

export default ResetPassword;
