function register() {
    const login = document.getElementById("user-login").value;
    const pass = document.getElementById("user-pass").value;
    const statusText = document.getElementById("status-message");

    if (!login || !pass) {
        statusText.style.color = "red";
        statusText.innerText = "Credentials required";
        return;
    }

    fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: login, password: pass })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            statusText.style.color = "green";
            statusText.innerText = "Registration successful!";
        } else {
            statusText.style.color = "red";
            statusText.innerText = data.message;
        }
    })
    .catch(() => {
        statusText.style.color = "red";
        statusText.innerText = "Server connection error";
    });
}

function login() {
    const login = document.getElementById("user-login").value;
    const pass = document.getElementById("user-pass").value;
    const statusText = document.getElementById("status-message");

    if (!login || !pass) {
        statusText.style.color = "red";
        statusText.innerText = "Credentials required";
        return;
    }

    fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: login, password: pass })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            document.getElementById("auth-container").classList.add("hidden");
            document.getElementById("success-screen").classList.remove("hidden");
        } else {
            statusText.style.color = "red";
            statusText.innerText = data.message;
        }
    })
    .catch(() => {
        statusText.style.color = "red";
        statusText.innerText = "Server connection error";
    });
}