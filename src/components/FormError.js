import React from 'react';

const FormError = ({ errors }) => {
    return (
        <ul style={{ color: 'red', listStyleType: 'none', padding: 0 }}>
            {errors.map((error, index) => (
                <li key={index}>{error}</li>
            ))}
        </ul>
    );
};

export default FormError;
