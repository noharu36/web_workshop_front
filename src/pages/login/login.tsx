import { useState } from 'react'
import axios from 'axios';
import { Navigate } from "react-router-dom";
import './login.css'


function Login() {
    const [user, setUser] = useState({
        id: 0,
        name: '',
        password: '',
    });


    const [loggedInSuccess, setLoggedInSuccess] = useState(false);

    const [show, setShow] = useState(false);


    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();


        const login_url: string = 'http://127.0.0.1:8080/login';
        axios.post(login_url, {
            name: user.name,
            password: user.password
        })
        .then(function (response) {
            if (response.data.auth) {
                localStorage.setItem("info", JSON.stringify({ ...user, id: response.data.id }))
                setLoggedInSuccess(true);
            } else {
                setShow(true)
                setUser({
                    id: 0,
                    name: '',
                    password: '',
                })
                localStorage.removeItem('info')
                console.log(user)
                console.log(localStorage.getItem("info"))
            }
        })
    };

    if (loggedInSuccess) {
        return <Navigate to="/" />
    }

    return (
        <>
            <div className='loginForm'>
                <h1>ログイン</h1>
                <div className='content'>
                    <img id='logo' src='/images/Uniconnect_logo.png' />
                    <form className='form' onSubmit={handleSubmit}>
                        <label>
                            <h3>  名 前 </h3>
                            <input className='inputArea'
                                name="name"
                                type="text"
                                placeholder='username'
                                value={user.name}
                                onChange={handleChange}
                            />
                            <h3>  パスワード </h3>
                            <input className='inputArea'
                                name="password"
                                type="text"
                                placeholder='password'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </label>
                        <br />
                        <input id='submitButton' type="submit" value="ログイン" />
                        <Modal show = {show} setShow = {setShow}/>
                    </form>
                </div>
            </div>
        </>
    )
}

function Modal({show, setShow}:{show:boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>}) {
    if (show) {
        return (
            <div id="overlay">
            <div id="content">
                <p id="err">ERROR</p>
                <p>名前とパスワードを確認して再度ログインしてください</p>
                <button onClick={() => setShow(false)}>Close</button>
            </div>
            </div>
        );
        } else {
        return null;
    }
}

export default Login
