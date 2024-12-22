import React from 'react';

const ErrorNotification = ({ message }) => {
    return (
        <div style={{ color: 'red', margin: '10px 0', fontWeight: 'bold' }}>
            {message}
        </div>
    );
};

export default ErrorNotification;
