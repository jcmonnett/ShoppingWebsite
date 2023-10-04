import React, { useState } from 'react';
import './LoginModal.css';

function LoginModal({ isOpen, onClose, onLogin, onRegister }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        if (isRegistering) {
            onRegister(email, password, confirmPassword);
        } else {
            onLogin(email, password);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
            <button onClick={onClose}>Close</button>
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            {isRegistering && (
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
            )}
            <button onClick={handleSubmit}>
                {isRegistering ? 'Register' : 'Login'}
            </button>
            <p onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
            </p>
            </div>
        </div>
    );
}

export default LoginModal;