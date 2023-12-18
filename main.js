document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginForm = document.querySelector('.login-form');

    usernameInput.addEventListener('input', function () {
        this.value = this.value.trim();
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');

        if (/^\d/.test(this.value)) {
            this.value = this.value.replace(/^\d/, '');
        }
    });

    passwordInput.addEventListener('input', function () {
        this.value = this.value.replace(/\s/g, '');
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
    });    

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;
        const roleInput = document.getElementById('role');
        const roleValue = roleInput.value;

        if (usernameValue.length < 3 || passwordValue.trim().length < 4) {
            alert('ชื่อผู้ใช้ต้องมีความยาวอย่างน้อย 3 ตัวอักษร และรหัสผ่านต้องมีความยาวอย่างน้อย 4 ตัวอักษร กรุณากรอกข้อมูลให้ครบทุกช่อง');
            usernameInput.style.backgroundColor = '#ffb3b3';
            passwordInput.style.backgroundColor = '#ffb3b3';
            return;
        }
        usernameInput.style.backgroundColor = '';
        passwordInput.style.backgroundColor = '';

        if (roleValue.trim() === '') {
            alert('โปรดเลือกบทบาท');
            roleInput.style.backgroundColor = '#ffb3b3';
            return;
        }
        roleInput.style.backgroundColor = '';

        alert('Username: ' + usernameValue + '\nPassword: ' + passwordValue + '\nRole: ' + roleValue + '\n' + '\nกด OK ไปที่เว็บไซต์ : example.com');
        setTimeout(function () {
            window.location.href = 'https://example.com/';
        }, 1000);
    });
});
