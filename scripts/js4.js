'use strict';
function init() {
    const login = document.getElementById('login');
    const register = document.getElementById('register');
    login.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('login');
    });
    register.addEventListener('click', (e) => {
        e.preventDefault();
        loadContent('register');
    });
}
function loadContent(name) {
    const request = new XMLHttpRequest();
    request.onload = (e) => {
        if (request.status === 200) {
            const htmlSnippet = request.responseText;
            document.getElementById('main-content').innerHTML = htmlSnippet;
        }
    };
    request.open(
        'GET',
        name + '.html'
    );
    request.responseType = '';
    request.setRequestHeader('Accept', 'text/html');
    request.send();
}
window.addEventListener('DOMContentLoaded', init);