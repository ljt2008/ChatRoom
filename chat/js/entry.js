((doc) => {
    const oUsername = doc.querySelector('#username')
    const oEnterBtn = doc.querySelector('#enter')
    const init = () => {
        bindEvent()
    }
    function handleEnterBtnClick() {
        const username = oUsername.value.trim()
        if (username.length < 6) {
            alert('用户名不小于6位')
            return;
        }
        localStorage.setItem('username', username)
        location.href = 'index.html'
    }
    function bindEvent() {
        oEnterBtn.addEventListener('click', handleEnterBtnClick, false)
    }
    init()
})(document)