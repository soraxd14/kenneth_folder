document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === 'Kenneth Lacson' && password === '5254') {
        window.location.href = 'home.html';
    } else {
        alert('Incorrect credentials!');
    }
});