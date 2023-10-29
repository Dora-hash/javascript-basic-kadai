const cbtn = document.getElementById('btn');
cbtn.addEventListener('click', () => {
    setTimeout(() => {
        const moji = document.querySelector('#text');
        moji.textContent = 'ボタンをクリックしました';
    }, 2000);
});