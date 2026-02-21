export default function AdminLogin() {
    const login = () => {
      localStorage.setItem("role", "admin");
      alert("Admin Logged In");
    };
  
    const logout = () => {
      localStorage.removeItem("role");
      alert("Logged Out");
    };
  
    return (
      <div>
        <button onClick={login}>Admin Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  