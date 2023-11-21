// eslint-disable-next-line no-unused-vars
function logout() {
    localStorage.removeItem('token');
    
    window.location.href = '/index.html';
}

document.getElementById('logout-btn').addEventListener('click', logout);