import { useState } from 'react'
import axios from 'axios';
import './roomCreate.css';

function CreateRoom({show, setShow}:{show:boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>}) {
    interface UserInfo {
        id: number;
        name: string;
        password: string;
    }
    const userInfo: UserInfo = JSON.parse(localStorage.getItem("info")!);
    const [info, setInfo] = useState({
        title: "",
        subject: "",
        place: "",
        purpose: "",
        comment: "",

    })

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]: value
        });
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const login_url: string = 'http://127.0.0.1:8080/create';
        axios.post(login_url, {
            title: info.title,
            subject: info.subject,
            place: info.place,
            purpose: info.purpose,
            comment: info.comment,
            create_user_id: userInfo.id,
            create_user_name: userInfo.name,
        })
        .then(() => {
            setShow(false)
            setInfo({
                title: "",
                subject: "",
                place: "",
                purpose: "",
                comment: "",
            })
        })
    };


    if (show) {
        return (
            <div id="over-lay">
            <div id="form-content">
                <form className='roomForm' onSubmit={handleSubmit}>
                    <label>
                        <h3>  タイトル </h3>
                        <input className='inputArea'
                            name="title"
                            type="text"
                            placeholder='title'
                            value={info.title}
                            onChange={handleChange}
                        />
                        <h3>  教科 </h3>
                        <input className='inputArea'
                            name="subject"
                            type="text"
                            placeholder='subject'
                            value={info.subject}
                            onChange={handleChange}
                        />
                        <h3>  場所 </h3>
                        <input className='inputArea'
                            name="place"
                            type="text"
                            placeholder='place'
                            value={info.place}
                            onChange={handleChange}
                        />
                        <h3>  目的 </h3>
                        <input className='inputArea'
                            name="purpose"
                            type="text"
                            placeholder='purpose'
                            value={info.purpose}
                            onChange={handleChange}
                        />
                        <h3>  コメント </h3>
                        <input className='inputArea'
                            name="comment"
                            type="text"
                            placeholder='comment'
                            value={info.comment}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <input id='submitRoomButton' type="submit" value="投稿"/>
                    <input id='cancelButton' type="button" value="キャンセル" onClick={() => setShow(false)}/>
                </form>
            </div>
            </div>
        );
        } else {
        return null;
    }
}

export default CreateRoom