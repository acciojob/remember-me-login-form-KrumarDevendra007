//your JS code here. If required.
https://www.svgrepo.com/show/345221/three-dots.svg

  document.addEventListener('DOMContentLoaded', () => {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const rememberCheckbox = document.getElementById('checkbox');
            const submitButton = document.getElementById('submit');
            const existingButton = document.getElementById('existing');

            // Check if there are saved credentials
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');

            if (savedUsername && savedPassword) {
                existingButton.style.display = 'inline-block';
            }

            // Handle submit button click
            document.getElementById('loginForm').addEventListener('submit', (event) => {
                event.preventDefault();

                const username = usernameInput.value;
                const password = passwordInput.value;

                if (rememberCheckbox.checked) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }

                alert(`Logged in as ${username}`);

                // Show existing user button if credentials are saved
                if (rememberCheckbox.checked) {
                    existingButton.style.display = 'inline-block';
                }
            });