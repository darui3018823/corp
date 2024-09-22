window.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container');
    const leftSlash = document.getElementById('left-slash');
    const rightSlash = document.getElementById('right-slash');

    // タイピングアニメーションを開始するタイミング
    setTimeout(function() {
        textContainer.style.opacity = '1';
        textContainer.style.animation = 'typing 3.5s steps(30, end), blink-caret .75s step-end infinite';
    }, 2000);

    // Ahoshinet Internet Co., Ltd. を消すアニメーション
    setTimeout(function() {
        textContainer.classList.add('fade-out');
    }, 8000);

    // "アホシネット通信株式会社" に切り替える
    setTimeout(function() {
        textContainer.textContent = 'アホシネット通信株式会社';
        textContainer.style.borderRight = '2px solid black';
        textContainer.classList.remove('fade-out');
        textContainer.classList.add('fade-in');
        textContainer.style.animation = 'none'; // タイピングアニメーションをリセット

        // タイピングアニメーションを再スタート
        setTimeout(function() {
            textContainer.style.animation = 'typing 3.5s steps(30, end), blink-caret .75s step-end infinite';
        }, 100); // アニメーションリセット後の短い遅延

    }, 10000);

    // フェードイン・フェードアウトのサイクル
    setInterval(function() {
        textContainer.classList.toggle('fade-in');
        textContainer.classList.toggle('fade-out');
    }, 15000); // 5秒ごとに切り替え
});
