import { Link, Outlet, useNavigate } from "react-router-dom";
import { LogoutAsync } from "../../hooks/useSession";

function Layout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    var ok = await LogoutAsync();
    if (ok) {
      navigate("/login");
    }
  };
  return (
    <div>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>CyberTIP</h2>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <button onClick={handleLogout} style={styles.button}>Logout</button>
        </div>
      </nav>

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
