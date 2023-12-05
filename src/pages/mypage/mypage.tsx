//import { useState, useEffect} from 'react'
//import axios from 'axios';
import './mypage.css'
import { Navigate } from "react-router-dom";

function Mypage() {
    interface UserInfo {
        id: number;
        name: string;
        password: string;
    }
    const userInfo: UserInfo = JSON.parse(localStorage.getItem("info")!);
    if (userInfo == null) {
        return <Navigate to="login" />
    }

    return (
        <>
            <p>hello world!!</p>
        </>
    )
}

export default Mypage