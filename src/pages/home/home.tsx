import { Navigate } from "react-router-dom";

function Home() {
    const userInfo = localStorage.getItem("info");
    console.log(userInfo)
    if (userInfo == null) {
        return <Navigate to="login" />
    }
    return (
        <>
            <p>hello world</p>
        </>
    )
}

export default Home