function getUsername() {
    const username = document.getElementById('username').value;
    return username;
}

const saveButton = document.getElementById('save');
saveButton.addEventListener('click', (e) => {
    const username = getUsername();
    localStorage.setItem("username", username);
});

const loadButton = document.getElementById('load');
loadButton.addEventListener('click', (e) => {
    const username = getUsername();
    sessionStorage.setItem("username", username);
});