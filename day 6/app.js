// Function to navigate to Sign Up page
function navigateToSignUp() {
    window.location.href = 'signup.html';
}

// Function to handle Sign Up form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    
    // For simplicity, assuming successful signup
    // Normally would send data to server, handle response, etc.
    
    // Redirect to Login page after signup
    window.location.href = 'login.html';
});

// Function to handle Login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;
    
    // For simplicity, assuming valid login
    // Normally would validate credentials against server, handle response, etc.
    
    // Redirect to Welcome page after login
    localStorage.setItem('loggedInUser', username); // Store logged in user in localStorage
    window.location.href = 'welcome.html';
});

// Function to handle Logout
function logout() {
    localStorage.removeItem('loggedInUser'); // Remove logged in user from localStorage
    window.location.href = 'index.html'; // Redirect to Getting Started page
}

// Function to initialize Welcome page
function initWelcomePage() {
    let loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('loggedInUser').textContent = loggedInUser;
    } else {
        // If not logged in, redirect to Getting Started page
        window.location.href = 'index.html';
    }
}

// Check which page is loaded and perform necessary actions
window.onload = function() {
    if (window.location.pathname.endsWith('welcome.html')) {
        initWelcomePage();
    }
};
