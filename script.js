  const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const rememberCheckbox = document.getElementById('checkbox');
        const submitButton = document.getElementById('submit');
        const existingButton = document.getElementById('existing');

        // Check if details are already stored in local storage
        window.onload = function() {
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (storedUsername && storedPassword) {
                existingButton.style.display = 'block';
            }
        };

        // Form submission event handler
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const username = usernameInput.value;
            const password = passwordInput.value;

            if (rememberCheckbox.checked) {
                // Save username and password in local storage
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                // Remove username and password from local storage
                localStorage.removeItem('username');
                localStorage.removeItem('password');
            }

            alert(`Logged in as ${username}`);

            // Check if details are saved and show the existing user button
            if (localStorage.getItem('username') && localStorage.getItem('password')) {
                existingButton.style.display = 'block';
            }
        });

        // Existing user login event handler
        existingButton.addEventListener('click', function() {
            const storedUsername = localStorage.getItem('username');
            alert(`Logged in as ${storedUsername}`);
        });