import { useState, useEffect} from 'react'
import axios from 'axios';
import './home.css'
import { Navigate } from "react-router-dom";
import CreateRoom from '../../assets/roomCreate';

function Home() {
    interface UserInfo {
        id: number;
        name: string;
        password: string;
    }
    const userInfo: UserInfo = JSON.parse(localStorage.getItem("info")!);
    if (userInfo == null) {
        return <Navigate to="login" />
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [room, setRoom] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [join, setJoin] = useState(0);

    const get_url: string = 'http://127.0.0.1:8080/';
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(get_url)
        .then(function(response) {
            console.log(response)
            setRoom(response.data.threads)
        })
    }, [show])

    const handleParticipation = (id: number, title: string) => {
        if (join==id) {
            return alert("すでに参加しています")
        }
        const tableName = `${userInfo.name}_${userInfo.id}`
        const join_url = 'http://127.0.0.1:8080/join';
        axios.post(join_url ,{
            id: id,
            title: title,
            user_id: userInfo.id,
            name: tableName
        })
        .then(() => {
            setJoin(id)
            {<Navigate to="mypage" />}
        })
    }

    const displayRoom = room.map((value: {id: number; title: string; subject: string; place: string; purpose: string; comment: string; create_user_id: number; create_user_name: string; create_at: string; }) => {
            return (
                <>
                    <div className='room'>
                        <div className='roomInfo'>
                            <h3 className='title'>{value.title}</h3>
                            <p className='subject'>教科: {value.subject}</p>
                            <p className='place'>場所: {value.place}</p>
                            <p className='purpose'>目的: {value.purpose}</p>
                            <p className='comment'>コメント: {value.comment}</p>
                            <p className='createAt'>{value.create_at}</p>
                        </div>
                        <input className='joinButton' type='button' value='参加' onClick={() => {handleParticipation(value.id, value.title)}} />
                    </div>
                </>
            )
        })


    return (
        <>
            <div className="container">
                <header className="header">
                    <img id='Logo' src='/images/Uniconnect_logo.png' />
                    <div className="button-container">
                        <input id='taskButton' type="button" value="タスク" />
                        <input id='fileButton' type="button" value="ファイル" />
                        <input id='calenderButton' type="button" value="カレンダー" />
                    </div>
                </header>
                <main className="main-content">
                    <p>ルーム一覧</p>
                    <div className='post'>{displayRoom}</div>
                    <input id='createButton' type='button' value='作成' onClick={() => setShow(true)}/>
                    <CreateRoom show = {show} setShow = {setShow}/>
                </main>
            </div>
        </>
    )
}

export default Home