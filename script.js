document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Logging in...');
        // Here, you would typically handle the login logic, such as sending the data to a server.
    } else {
        alert('Please enter both email and password.');
    }
});
