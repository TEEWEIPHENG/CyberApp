import { LogoutApi } from "../api/login";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useSession = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const ok = isLoggedIn();
        if (ok) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch {
        setAuthenticated(false);
      }

      setLoading(false);
    };
    checkLogin();
  }, []);

  return { loading, authenticated };
};

export const LogoutAsync = async () => {
  try {
    const response = await LogoutApi();
    RemoveSession();
    return response;
  }
  catch (err) {
    console.error(err);
    return false;
  }
}

export const isLoggedIn = () => {
  const token = localStorage.getItem("auth_session");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);

    if (!decoded.exp) return false;

    const now = Date.now() / 1000;

    return decoded.exp > now;

  } catch (err) {
    console.error(err);
    return false;
  }
};

export const SetSession = (token) => {
    localStorage.setItem("auth_session", token);
}

export const GetSession = () => {
    return localStorage.getItem("auth_session");
}

export const RemoveSession = () => {
    localStorage.removeItem("auth_session");
}