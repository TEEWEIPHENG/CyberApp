import { Link, Outlet, useNavigate } from "react-router-dom";
import { use, useState } from "react";
import useLogin from "../../hooks/useLogin";
import checkAuth,  { logout }   from "../../hooks/auth";

function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    var ok = await logout();
    
        console.log(ok);
    if(ok){
        setIsAuthenticated(false);
        sessionStorage.removeItem("auth_session");
        sessionStorage.removeItem("session_expiry");

        navigate("/login");
    }
  };

  return (
    <div>
      {/* ✅ Navigation Bar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>CyberTIP</h2>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>

          {/* ✅ Show Login or Logout Button */}
          {isAuthenticated ? (
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          ) : (
            <div>
                <button onClick={handleLogin} style={styles.button}>Create new account</button>
                <button onClick={handleLogin} style={styles.button}>Login</button>
            </div>
          )}
        </div>
      </nav>

      {/* ✅ Page Content */}
      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#222",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  navLinks: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  },
  button: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    background: "#4CAF50",
    color: "white"
  },
  content: {
    padding: "20px"
  }
};

export default Layout;
