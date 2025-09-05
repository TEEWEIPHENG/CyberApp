import { Link, Outlet, useNavigate } from "react-router-dom";
import { LogoutAsync } from "../../hooks/useSession";
import { useEffect, useState } from "react";
import { GetUserInfoApi } from "../../api/login";
import { FaComments, FaGripLines, FaUserCircle } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

import "../styles/layout.css"; // import the CSS file

function Layout() {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const getUserInfo = async () => {
      if (displayName) return;
      const response = await GetUserInfoApi();
      if (response && response.status === 200) {
        setDisplayName(response.data?.firstname + " " + response.data?.lastname);
      }
    };
    getUserInfo();
  }, [displayName]);

  const handleLogout = async () => {
    var ok = await LogoutAsync();
    if (ok) {
      navigate("/login");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <button
          className="sidebar-btn"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FaGripLines />
        </button>
        <Link to="/" className="logo-link">
          <h2 className="logo">CyberTIP</h2>
        </Link>
        <div className="nav-actions">
          <div className="user-profile">
            <Link to="/userprofile" className="nav-link user-name">
              <FaUserCircle /> {displayName}
            </Link>
          </div>
          <div className="user-settings">
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div style={{ display: "flex" }}>
        <div className={showSidebar ? "nav-links" : "simple-nav-links"}>
          <Link to="/chat" className="nav-link">
            <FaComments /> {showSidebar ? "Chat" : ""}
          </Link>
          <Link to="/" className="nav-link">
            <FaClockRotateLeft /> {showSidebar ? "Upcoming" : ""}
          </Link>
          <Link to="/" className="nav-link">
            <FaClockRotateLeft /> {showSidebar ? "Upcoming" : ""}
          </Link>
          <Link to="/" className="nav-link">
            <FaClockRotateLeft /> {showSidebar ? "Upcoming" : ""}
          </Link>
        </div>
        <main
          className="content"
          style={showSidebar ? {} : { marginLeft: "55px" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
