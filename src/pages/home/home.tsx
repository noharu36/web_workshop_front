import { useState } from 'react'
import './home.css'
import { Navigate } from "react-router-dom";
import CreateRoom from '../../assets/roomCreate';

function Home() {
    const userInfo = localStorage.getItem("info");
    if (userInfo == null) {
        return <Navigate to="login" />
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);


    return (
        <div className="container">
            <header className="header">
                <div className="button-container">
                    <img id='logo' src='/images/Uniconnect_logo.png' />
                    <input id='taskButton' type="button" value="タスク" />
                    <input id='fileButton' type="button" value="ファイル" />
                    <input id='calenderButton' type="button" value="カレンダー" />
                </div>
            </header>
            <main className="main-content">
                <div className='post'>
                    <div className='soccer'>
                        {/* 写真 */}
                        <div className="image-container">
                            <img id='soccer_boy' src='/images/sports_soccer_boy.png' alt="サッカー" />
                        </div>

                        {/* 説明文 */}
                        <div className="box">
                            <p>
                                サッカーやろうぜ！<br />
                                場所:会津大学グラウンド<br />
                                日時:1/13 11:00~<br />
                            </p>
                        </div>

                        <input id='joinButton' type="button" value="参加" />
                    </div>

                    <div className='study'>
                        {/* 写真 */}
                        <div className="image-container">
                            <img id='soccer_boy' src='/images/study_night_boy.png' alt="サッカー" />
                        </div>

                        {/* 説明文 */}
                        <div className="box">
                            <p>
                                線形代数一緒に勉強しませんか？<br />
                                場所:会津大学図書館<br />
                                日時:1/17 9:00~<br />
                            </p>
                        </div>

                        <input id='joinButton' type="button" value="参加" />
                    </div>

                    <div className='programming'>
                        {/* 写真 */}
                        <div className="image-container">
                            <img id='soccer_boy' src='/images/computer_mob_programming.png' alt="サッカー" />
                        </div>

                        {/* 説明文 */}
                        <div className="box">
                            <p>
                                C++一緒に勉強しませんか？<br />
                                場所:UBIC<br />
                                日時:3/01 19:00~<br />
                            </p>
                        </div>

                        <input id='joinButton' type="button" value="参加" />
                    </div>

                    <div className='girlfriend'>
                        {/* 写真 */}
                        <div className="image-container">
                            <img id='soccer_boy' src='/images/couple_dakitsuku_man.png' alt="サッカー" />
                        </div>

                        {/* 説明文 */}
                        <div className="box">
                            <p>
                                彼女募集中！<br />
                            </p>
                        </div>

                        <input id='joinButton' type="button" value="参加" />
                    </div>
                </div>
                <input id='createButton' type='button' value='作成' onClick={() => setShow(true)}/>
                <CreateRoom show = {show} setShow = {setShow}/>
            </main>
        </div>
    )
}

export default Home