import React from "react";
import { verifySession } from "../api/login";
import { logoutApi } from "../api/login";
export default async function checkAuth() {
    try {
        const response = await verifySession();
        return response;
    } catch {
        return false;
    }
}

export async function logout(){
    return logoutApi();
}