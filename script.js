// ホーム画面への遷移
function goToHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('createRoom').style.display = 'none';
    document.getElementById('roomDetails').style.display = 'none';
    document.getElementById('shareDetails').style.display = 'none';
}

// ルーム作成画面への遷移
function goToCreateRoom() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('createRoom').style.display = 'block';
    document.getElementById('roomDetails').style.display = 'none';
    document.getElementById('shareDetails').style.display = 'none';
}

// 参加ボタンクリックで第一ルーム詳細画面へ遷移
function goToRoomDetails() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('createRoom').style.display = 'none';
    document.getElementById('roomDetails').style.display = 'block';
    document.getElementById('shareDetails').style.display = 'none';
    displayRoomInfo();
}

// 共有ボタンクリックで第二ルーム詳細画面へ遷移
function goToShare() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('createRoom').style.display = 'none';
    document.getElementById('roomDetails').style.display = 'none';
    document.getElementById('shareDetails').style.display = 'block';
}

// ルーム情報表示
function displayRoomInfo() {
    // 仮のデータです。実際にはデータベースから取得する必要があります。
    const roomInfo = {
        roomName: "学習グループ",
        subject: "数学",
        location: "図書館",
        purpose: "勉強",
        comment: "みんなで一緒に頑張りましょう！"
    };

    const roomInfoDiv = document.getElementById('roomInfo');
    roomInfoDiv.innerHTML = `<p>ルーム名: ${roomInfo.roomName}</p>
                             <p>教科名: ${roomInfo.subject}</p>
                             <p>場所: ${roomInfo.location}</p>
                             <p>目的: ${roomInfo.purpose}</p>
                             <p>コメント: ${roomInfo.comment}</p>`;
}

// タスク追加
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `<p>${taskInput.value}</p><button onclick="removeTask(this)">削除</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    } else {
        alert('タスクを入力してください！');
    }
}

// タスク削除
function removeTask(button) {
    const taskItem = button.parentNode;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskItem);
}

// 写真追加
function uploadPhoto() {
    const photoInput = document.getElementById('photoInput');

    if (photoInput.files.length > 0) {
        alert('写真がアップロードされました！');
        // ここで写真を保存する処理を追加する
        photoInput.value = ''; // ファイル選択をクリア
    } else {
        alert('写真を選択してください！');
    }
}

// フォームの投稿処理
function createRoom() {
    const roomName = document.getElementById('roomName').value;
    const subject = document.getElementById('subject').value;
    const location = document.getElementById('location').value;
    const purpose = document.getElementById('purpose').value;
    const comment = document.getElementById('comment').value;

    if (roomName && subject && location && purpose && comment) {
        alert('ルームが作成されました！');
        // ここでデータベースにルーム情報を保存する処理を追加する
        goToRoomDetails(); // 作成したルームの詳細画面に遷移
    } else {
        alert('全ての項目を入力してください！');
    }
}
