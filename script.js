let userList = [];

function ajouterUtilisateur() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    if (username !== '') {
        userList.push(username);
        afficherUtilisateurs();
        usernameInput.value = '';
    }
}

function supprimerUtilisateur(index) {
    userList.splice(index, 1);
    afficherUtilisateurs();
}

function afficherUtilisateurs() {
    const listElement = document.getElementById('userList');
    listElement.innerHTML = '';

    userList.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = user;
        li.onclick = () => supprimerUtilisateur(index);
        listElement.appendChild(li);
    });
}
