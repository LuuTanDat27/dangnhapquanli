const container = document.getElementById('container');
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra username và password
    if (username === "luutandat@gmail.com" && password === "290907") {
        // Nếu đúng, chuyển hướng đến trang chủ
        window.location.href = "https://dailysieure.com";
    } else {
        // Nếu sai, hiển thị thông báo lỗi hoặc thực hiện các hành động khác
        alert("Invalid username or password. Please try again.");
    }
});
