import {jwtDecode} from "jwt-decode";
import { LogoutApi } from "../api/login";

export const IsTokenExpired = () => {
  const token = sessionStorage.getItem("auth_session");
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);

    if (!decoded.exp) return true;

    const now = Date.now() / 1000;

    return decoded.exp < now;

  } catch (err) {
    console.error(err);
    return true; 
  }
};

export const ClearSessionAsync = async () => {
    try
    {
        //call logout API
        await LogoutApi();
        sessionStorage.removeItem("auth_session");

        return true;

    }
    catch(err)
    {
        console.log(err);
        
        return false;
    }
}

export const SetSession = (token) => {
    sessionStorage.setItem("auth_session", token);
}