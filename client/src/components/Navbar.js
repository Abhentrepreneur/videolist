import React from 'react';

const Navbar = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';  // Redirect to Google login
    };

    return (
        <nav>
            <h1>Video App</h1>
            <button onClick={handleLogin}>Login with Google</button>
        </nav>
    );
};

export default Navbar;
